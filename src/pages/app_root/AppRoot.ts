
import { Component, ViewChild } from "@angular/core";
import {MenuController, Nav, NavController} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { AgendaPage } from "../agenda/agenda";
import { AboutPage } from "../about/about";
import { SponsorsPage } from "../sponsors/sponsors";
import { SpeakersPage } from "../speakers/speakers";
import { UpdatesPage } from "../updates/updates";
import { HomePage } from "../home/home";
import { ReservationsPage } from "../reservations/reservations";
import { VerifyPage } from "../verify/verify";
import {LogoutPage} from "../logout/logout";

@Component({
  selector: 'page-app-root',
  templateUrl: 'app-root.html'
})
export class AppRoot {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string, enabled: boolean }>;

  activated: boolean


  constructor(public navCtrl: NavController, public storage: Storage, public menuCtrl: MenuController) {
    this.activated = false;
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home', enabled: true },
      { title: 'Agenda', component: AgendaPage, icon: 'calendar', enabled: true },
      { title: 'Speakers', component: SpeakersPage, icon: 'mic', enabled: true },
      { title: 'Sponsors', component: SponsorsPage, icon: 'star', enabled: true },
      { title: 'Updates', component: UpdatesPage, icon: 'refresh', enabled: true },
      { title: 'Reservations', component: ReservationsPage, icon: 'bookmarks', enabled: false },
      { title: 'Verify', component: VerifyPage, icon: 'key', enabled: true },
      { title: 'About ITW', component: AboutPage, icon: 'information-circle', enabled: true },
      { title: 'Logout', component: LogoutPage, icon: 'log-out', enabled: true },
      // { title: 'Login', component: LoginPage }
    ];

  }

  openPage(page, isEnabled) {
    // push instead of setRoot to make home is the default root
    if (page.title === 'Home') return;
    if (isEnabled)
      this.navCtrl.push(page.component);
  }


  ionViewDidEnter () {
    this.storage.get('activated').then((data) => {
      this.activated = data;
      let verifyPage = this.pages.find(page => page.title === 'Verify')
      let reservationsPage = this.pages.find(page => page.title === 'Reservations')

      verifyPage.enabled = !this.activated
      reservationsPage.enabled = this.activated

    })
  }

}
