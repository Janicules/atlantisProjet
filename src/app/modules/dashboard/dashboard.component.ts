import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { URL_BMS_API } from '../../../environments/environment';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { LeafletService } from '../../core/external/leaflet.service';
import { CacheService } from '../../core/storage/cache.service';
import { DistributionService } from '../../core/api/distribution.service';
import { GeneralService } from '../../core/api/general.service';

import { DistributionData } from '../../model/distribution-data';

import { GlobalText } from '../../../texts/global';
import { finalize } from 'rxjs/operators';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public dashboard = GlobalText.TEXTS;

    referedClassToken = DistributionData;
    distributions: MatTableDataSource<DistributionData>;

    // Loaders
    loadingTable = true;
    loadingSummary = true;

    public maxWidthMobile = 750;
    public heightScreen;
    public widthScreen;

    public summary = [];

    hasRights: boolean = false;
    hasRightsEdit: boolean = false;

    constructor(
        private http: HttpClient,
        private _authenticationService: AuthenticationService,
        private router: Router,
        private serviceMap: LeafletService,
        private _cacheService: CacheService,
        public _distributionService: DistributionService,
        public _generalService: GeneralService,

    ) { }

    ngOnInit() {
        const user = this._authenticationService.getUser();
        if (!user.loggedIn) {
            this.router.navigate(['/login']);
        }
        this.serviceMap.createMap('map');
        this.serviceMap.addTileLayer();

        this.getSummary();
        this.checkDistributions();
        this.checkSize();
        this.checkPermission();
    }

    /**
     * check if the langage has changed
     */
    ngDoCheck() {
        if (this.dashboard !== GlobalText.TEXTS) {
            this.dashboard = GlobalText.TEXTS;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.checkSize();
    }

    checkSize(): void {
        this.heightScreen = window.innerHeight;
        this.widthScreen = window.innerWidth;
    }

    /**
    * get the distributions list to display on dashboard
    * check if it is cached, otherwise get it from the api
    */

    checkDistributions(): void {
        let distribs;
        this._distributionService.get()
            .pipe(
                finalize(
                    () => {
                        this.loadingTable = false;
                    },
                )
            ).subscribe(
                response => {
                    distribs = new MatTableDataSource(this.referedClassToken.formatArray(response));
                    this.distributions = distribs;
                    this._cacheService.set(CacheService.DISTRIBUTIONS, response);
                });
    }

    /**
     * Get summary information
     * @return array
     */
    getSummary(): void {
        this._generalService.getSummary()
            .pipe(
                finalize(
                    () => {
                        this.loadingSummary = false
                    },
                )
            ).subscribe(response => {
                this.summary = response;
            });
    }

    checkPermission() {
        const voters = this._cacheService.get('user').voters;

        if (voters == "ROLE_ADMIN" || voters == 'ROLE_PROJECT_MANAGER')
            this.hasRights = true;

        if (voters == "ROLE_ADMIN" || voters == 'ROLE_PROJECT_MANAGER' || voters == "ROLE_PROJECT_OFFICER")
            this.hasRightsEdit = true;
    }

}
