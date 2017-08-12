import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { SpeakersPage } from "../pages/speakers/speakers";
import { SponsorsPage } from "../pages/sponsors/sponsors";
import { SpeakerPage } from "../pages/speaker/speaker";
import { UpdatesPage } from "../pages/updates/updates";
import { SignupPage } from "../pages/signup/signup";
import { HeaderComponent } from '../components/header/header';
import { PostsProvider } from '../providers/posts/posts';
import { NewPostPage } from "../pages/new-post/new-post";
import { SpeakersProvider } from '../providers/speakers/speakers';
import { LoginPage } from "../pages/login/login";
import { SessionsProvider } from '../providers/sessions/sessions';
import {Day1Page} from "../pages/agenda/day1/day1";
import {Day2Page} from "../pages/agenda/day2/day2";
import {AgendaPage} from "../pages/agenda/agenda";
import {FilterPage} from "../pages/agenda/filter/filter";
import {SessionPage} from "../pages/session/session";
import { AppRoot } from "../pages/app_root/AppRoot";
import { BookmarkProvider } from '../providers/bookmark/bookmark';


export const apiEndPoint = 'http://192.168.1.8:8000';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    SpeakersPage,
    SponsorsPage,
    SpeakerPage,
    UpdatesPage,
    SignupPage,
    HeaderComponent,
    NewPostPage,
    LoginPage,
    AgendaPage,
    Day1Page,
    Day2Page,
    FilterPage,
    SessionPage,
    AppRoot
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    SignupPage,
    HeaderComponent,
    NewPostPage,
    LoginPage,
    AgendaPage,
    Day1Page,
    Day2Page,
    FilterPage,
    SessionPage,
    AppRoot
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    PostsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeakersProvider,
    SessionsProvider,
    BookmarkProvider

  ]
})
export class AppModule {}
