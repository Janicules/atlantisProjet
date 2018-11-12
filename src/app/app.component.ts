import { Component, HostListener } from '@angular/core';
import { User } from './model/user';
import { AuthenticationService } from './core/authentication/authentication.service';
import { GlobalText } from '../texts/global';

import { ModalLanguageComponent } from './components/modals/modal-language/modal-language.component';
import { MatDialog, MatSidenav } from '@angular/material';
import { AsyncacheService } from './core/storage/asyncache.service';
import { interval, timer, Observable } from 'rxjs';
import { map, mapTo, switchMap,  } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    user: User = new User();

    public currentRoute = "";
    public currentComponent;
    public menuHover = false;
    public openTopMenu = false;
    public smallScreenMode = false;
    public maxHeight = 600;
    public maxWidth = 750;

    public isShowing = false;
    public menu = GlobalText.TEXTS;

    hasRights: boolean = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private router: Router,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.checkSize();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.checkSize();
    }

    change() {
        if (!this.smallScreenMode)
            this.isShowing = !this.isShowing;
    }

    /**
    * open each modal dialog
    */
    openDialog(user_action): void {
        let dialogRef;

        if (user_action == 'language') {
            dialogRef = this.dialog.open(ModalLanguageComponent, {
            });
        }

        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }

    checkSize(): void {
        if ( this.smallScreenMode === false && ( (window.innerHeight < this.maxHeight) || (window.innerWidth < this.maxWidth) ) ) {
            this.smallScreenMode = true;
            this.isShowing = true;
            GlobalText.resetMenuMargin();
        }
        else if ( this.smallScreenMode === true && (window.innerHeight > this.maxHeight) && (window.innerWidth > this.maxWidth) ) {
            this.smallScreenMode = false;
            GlobalText.changeLanguage();
        }
        if( (window.innerHeight > this.maxHeight) && (window.innerWidth > this.maxWidth) ) {
            this.isShowing = false;
        }
    }

    hoverMenu(): void {
        this.menuHover = true;
    }

    outMenu(): void {
        this.menuHover = false;
    }

    setCurrentRoute(currentRoute): void {
        this.currentRoute = currentRoute;
    }

    toggle(sideNavId) {
        if (this.smallScreenMode) {
            sideNavId.toggle();
        }
    }

    onLogOut(e): void {
        this._authenticationService.logout().subscribe(
            disconnectedUser => {
                this.user = disconnectedUser;
            }   
        );
    }

    clickOnTopMenu(e): void {
        this.openTopMenu = !this.openTopMenu;
    }

    /**
     * get the name of the current page component (if it exists)
     * @param e
     */
    onActivate(event) {
        // Update the new component name.
        this.refreshCurrentComponent(event);
        // Verify the user.
        this._authenticationService.getUser().subscribe(
            user => { 
                this.user = user;
                this.checkLoggedUser(user);
                this.checkPermission(user);
            }
        );        
    }

    /**
     * Changes the name of the new component to actualize menu etc.
     */
    refreshCurrentComponent(e) {
        // console.log('changed : ', e.nameComponent);

        if (e.nameComponent === 'settings_title' && !this.hasRights) {
            this.router.navigate(['']);
            e.nameComponent = '';
        }

        if (!e.nameComponent || e.nameComponent === 'project_title' || e.nameComponent === 'beneficiaries_title'
            || e.nameComponent === 'report_title' || e.nameComponent === 'settings_title' || e.nameComponent === 'login') {
            this.currentComponent = e.nameComponent;
        }

        
    }

    /**
     * Check if user is logged in and redirect if necessary.
     */
    checkLoggedUser(cachedUser) {
        if(!cachedUser.loggedIn && this.currentComponent !== 'login') {
            this.router.navigate(['/login']);
            GlobalText.resetMenuMargin();
        } else if(cachedUser.loggedIn && this.currentComponent === 'login') {
            this.router.navigate(['/']);
        }
        
    }
    
    /**
     *  Check again Permissions on each page navigation.
     * @param cachedUser 
     */
    checkPermission(cachedUser) {
        if(cachedUser && cachedUser.voters) {
            const voters = cachedUser.voters;
            if (voters == "ROLE_ADMIN" || voters == 'ROLE_PROJECT_MANAGER' || voters == "ROLE_COUNTRY_MANAGER")
                this.hasRights = true;
            else
                this.hasRights = false;
        } else {
            this.hasRights = false;
        }
    }
}
