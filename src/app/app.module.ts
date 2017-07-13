import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AboutPage} from "../pages/about/about";
import {SpeakersPage} from "../pages/speakers/speakers";
import {SponsorsPage} from "../pages/sponsors/sponsors";
import {SpeakerPage} from "../pages/speaker/speaker";
import {UpdatesPage} from "../pages/updates/updates";
import {SignupPage} from "../pages/signup/signup";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    SpeakersPage,
    SponsorsPage,
    SpeakerPage,
    UpdatesPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    SpeakersPage,
    SponsorsPage,
    SpeakerPage,
    UpdatesPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
