
import { Component, ViewChild } from "@angular/core";
import { Nav, NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { AgendaPage } from "../agenda/agenda";
import { AboutPage } from "../about/about";
import { SponsorsPage } from "../sponsors/sponsors";
import { SpeakersPage } from "../speakers/speakers";
import { UpdatesPage } from "../updates/updates";
import { HomePage } from "../home/home";
import { ReservationsPage } from "../reservations/reservations";
import { VerifyPage } from "../verify/verify";

@Component({
  selector: 'app-root',
  templateUrl: 'app-root.html'
})
export class AppRoot {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;


  constructor(public navCtrl: NavController, ) {
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Agenda', component: AgendaPage, icon: 'calendar' },
      { title: 'Speakers', component: SpeakersPage, icon: 'mic' },
      { title: 'Sponsors', component: SponsorsPage, icon: 'star' },
      { title: 'Updates', component: UpdatesPage, icon: 'refresh' },
      { title: 'Reservations', component: ReservationsPage, icon: 'bookmarks' },
      { title: 'Verify', component: VerifyPage, icon: 'key' },
      { title: 'About ITW', component: AboutPage, icon: 'information-circle' },
      // { title: 'Login', component: LoginPage }
    ];
  }

  openPage(page) {
    // push instead of setRoot to make home is the default root
    if (page.title === 'Home') return;
    this.navCtrl.push(page.component);
  }


}
