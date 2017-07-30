import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SpeakersPage } from "../pages/speakers/speakers";
import { SponsorsPage } from "../pages/sponsors/sponsors";
import { AboutPage } from "../pages/about/about";
import { UpdatesPage } from "../pages/updates/updates";
import { LoginPage } from "../pages/login/login";
import {AgendaPage} from "../pages/agenda/agenda";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage; //HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Updates', component: UpdatesPage },
      { title: 'Speakers', component: SpeakersPage },
      { title: 'Sponsors', component: SponsorsPage },
      { title: 'About ITW', component: AboutPage },
      { title: 'Agenda', component: AgendaPage },
      { title: 'Login', component: LoginPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // push instead of setRoot to make home is the default root
    this.nav.push(page.component);
  }
}
