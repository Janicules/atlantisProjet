import { Injectable                                 } from '@angular/core';
import { RequestOptions                             } from '@angular/http';
import { HttpClient, HttpParams                     } from '@angular/common/http';
import { URL_BMS_API } from '../../../environments/environment';
import { Router, UrlHandlingStrategy                                     } from '@angular/router';

//Services
import { WsseService                                } from '../authentication/wsse.service';
import { Observable, concat, of } from 'rxjs';
import { AsyncacheService } from '../storage/asyncache.service';
import { map } from 'rxjs/operators';
import { NetworkService } from './network.service';
import { MatSnackBar } from '@angular/material';
import { type } from 'os';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

    constructor(
        private http : HttpClient,
        private cacheService: AsyncacheService,
        private networkService: NetworkService,
        private snackbar: MatSnackBar,
        private router : Router,
        private _wsseService : WsseService
    ){
    }

    resolveItemKey(url :string) {

        if (url.includes(URL_BMS_API, 0)) {
            url = url.split(URL_BMS_API)[1];

            switch(url) {
                case '/login' : return(AsyncacheService.USER)
                case '/projects' : return(AsyncacheService.PROJECTS)
                case '/distributions' : return(AsyncacheService.DISTRIBUTIONS)
                case '/location/upcoming_distribution' : return(AsyncacheService.UPCOMING)
                case '/country_specifics' : return(AsyncacheService.SPECIFICS)
                case '/users' : return(AsyncacheService.USERS)
                case '/donors' : return(AsyncacheService.DONORS)
                case '/location/adm1' : return(AsyncacheService.ADM1)
                case '/location/adm2' : return(AsyncacheService.ADM2)
                case '/location/adm3' : return(AsyncacheService.ADM3)
                case '/location/adm4' : return(AsyncacheService.ADM4)
                case '/distributions/criteria' : return(AsyncacheService.CRITERIAS)
                case '/modalities' : return(AsyncacheService.MODALITIES)
                case '/vulnerability_criteria' : return(AsyncacheService.VULNERABILITIES)
                default:
                    if(url.substring(0,24) === '/distributions/projects/')
                        return(AsyncacheService.DISTRIBUTIONS + '_' + url.split('/distributions/projects/')[1]);
                    else
                        return(null);
            }
        } else {
            return(null);
        }
        
    }

    get(url, options = {}) : Observable<any> {
        //console.log('-(', url,')-');

        let itemKey = this.resolveItemKey(url);
        let connected = this.networkService.getStatus();
        let cacheData : any;
        // Test logs
        //console.log('--', itemKey, '--');

        // If this item is cachable & user is connected
        if(itemKey && connected) {
            return concat(
                this.cacheService.get(itemKey).pipe(
                    map(
                        result => {
                            cacheData = result;
                            return(result);
                        }
                    )
                ), 
                this.http.get(url, options).pipe( 
                    map(
                        result => {
                            if(result !== undefined) {
                                if(Array.isArray(result) && Array.isArray(cacheData)) {
                                    if(JSON.stringify(result) !== JSON.stringify(cacheData))
                                        this.cacheService.set(itemKey, result);
                                } else if(result !== cacheData) {
                                    this.cacheService.set(itemKey, result);
                                }
                            }
                            return(result);
                        }
                    )
                )
            );
        }
        // If user is connected but cache doesn't manage this item
        else if (connected) {
            return this.http.get(url, options);
        } 
        // If user offline but this item can be accessed from the cache
        else if (itemKey) {
            return this.cacheService.get(itemKey);
        }
        // If disconnected and item uncachable
        else {
            return this.http.get(url, options).pipe(
                map(
                    () => {
                        return([]);
                    }
                )
            )
        }
    }

    post(url, body, options = {}) : Observable<any> {
        let connected = this.networkService.getStatus();

        if(connected) {
            return this.http.post(url, body, options);
        } else {
            this.snackbar.open('No network connection to update data', '', {duration:1000, horizontalPosition: 'center'});
            return of(null);
        }
    }

    put(url, body, options = {}) : Observable<any> {
        let connected = this.networkService.getStatus();

        if(connected) {
            return this.http.put(url, body, options);
        } else {
            this.snackbar.open('No network connection to create data', '', {duration:1000, horizontalPosition: 'center'});
            return of(null);
        }
    }

    delete(url, options = {}) : Observable<any> {
        let connected = this.networkService.getStatus();

        if(connected) {
            return this.http.delete(url, options);
        } else {
            this.snackbar.open('No network connection to delete data', '', {duration:1000, horizontalPosition: 'center'});
            return of(null);
        }
    }

}
