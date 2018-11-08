import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.page';
import { MapPage } from '../pages/map/map.page';
import { JoinGamePage } from '../pages/joingame/joingame.page';

import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { AlloutProvider } from '../providers/AlloutAPI/AlloutAPI';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MapPage,
        JoinGamePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MapPage,
        JoinGamePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        LocationTrackerProvider,
        AlloutProvider,
        BackgroundGeolocation
    ]
})
export class AppModule { }
