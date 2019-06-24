import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL;
  data: any;

  isLoggedIn$ = new Subject();
  isLoggedIn: Boolean = false;
  auth0 = new auth0.WebAuth({
    clientID: 'B2sSoMdmqo4PgIuq6aDf58gmJ60q6qDt',
    domain: 'dev-0wqacfgb.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://dev-0wqacfgb.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:8100/callback',
    scope: 'openid'
  });

  constructor(private http: Http, private router: Router) {
    this.BASE_URL = "https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/";

    // Check if user is logged In when Initializing
    const loggedIn = this.isLoggedIn = this.isAuthenticated();
    this.isLoggedIn$.next(loggedIn);
  }

  // Appel API
  call(path) {
    return new Promise(resolve => {
      var link = this.BASE_URL + path;

      this.http.get(link)
        .subscribe(data => {
          this.data = data.text();
          console.log("data", this.data);
          resolve(this.data);
        }, error => {
          console.log("link", link);
          console.log("erreur API : " + error);
        });
    });
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        const loggedIn = this.isLoggedIn = true;
        this.isLoggedIn$.next(loggedIn);
        this.router.navigate(['/home']);
      } else if (err) {
        const loggedIn = this.isLoggedIn = false;
        this.isLoggedIn$.next(loggedIn);
        this.router.navigate(['/home']);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    const loggedIn = this.isLoggedIn = false;
    this.isLoggedIn$.next(loggedIn);

    window.location.href = "https://dev-0wqacfgb.eu.auth0.com/v2/logout?returnTo=http://localhost:8100"
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }
}
