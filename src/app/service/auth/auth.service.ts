import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { ApiService } from '../api/api.service';
import { Http } from '@angular/http';
import { AppService } from '../app/app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: any;

  clientId: string = "27fb84fe-4baf-4b6b-bfe7-f2d0638f2790";
  clientSecret: string = "Zg2^04#WjA#h%6Q{]eK53J&`";
  tenant: string = "atlantisproject.onmicrosoft.com";
  redirectUri: string = "http://localhost:8090/login";

  options: InAppBrowserOptions = {
    hideurlbar: "yes",
    toolbar: "no",
    location: "no"
  }

  constructor(
    private inAB: InAppBrowser,
    private apiService: ApiService,
    private appService: AppService
  ) {
  }

  public login(): void {
    const browser = this.inAB.create("https://atlantisproject.b2clogin.com/" + this.tenant + "/oauth2/v2.0/authorize?client_id=" + this.clientId + "&response_type=code&redirect_uri=" + this.redirectUri + "&response_mode=query&scope=openid&state=data&p=B2C_1_SignUporSignIn", "_blank", this.options);
    browser.on('loadstart').subscribe(event => {
      if ((event.url).indexOf(this.redirectUri) === 0) {
        let responseParameters = ((event.url).split("?")[1]).split("&");
        let parsedResponse = {};

        for (let i = 0; i < responseParameters.length; i++) {
          parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
        }

        if (parsedResponse["code"] !== undefined && parsedResponse["code"] !== null) {

          this.apiService.get("postData.php?code=" + parsedResponse['code'])
            .then(
              res => {
                res = atob(res['id_token'].split(".")[1]);
                this.appService.user = JSON.parse(String(res));
              },
              err => {
                console.error("error", err);
              }
            )
            .catch(
              rej => {
                console.error("reject", rej);
              }
            )

        }

        browser.close();
      }
    });
  }
}
