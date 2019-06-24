import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './component/login/login.component';
import { HttpModule } from '@angular/http';
import { AppPipesModule } from './pipes/pipes.module';
import { CallbackComponent } from './component/callback/callback.component';
import { DevicesListComponent } from './component/devices-list/devices-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent,
    DevicesListComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpModule,
    AppPipesModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
