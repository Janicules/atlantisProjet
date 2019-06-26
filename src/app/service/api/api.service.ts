import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the ApiService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiService {

  public BASE_URL;
  data: any;

  constructor(public http: Http) {
    this.BASE_URL = "http://film-matou.arredondo-m.ovh/mobileProject/";
  }

  // Appel API
  get(path) {
    return new Promise(resolve => {

      var link = this.BASE_URL + path;

      this.http.get(link)
        .subscribe(data => {
          this.data = data.json();
          resolve(this.data);
        }, error => {
          console.log("erreur API : " + error);
        });
    });
  }
}
