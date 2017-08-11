
import {Component, ViewChild} from "@angular/core";
import {Nav, NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {AgendaPage} from "../agenda/agenda";
import {AboutPage} from "../about/about";
import {SponsorsPage} from "../sponsors/sponsors";
import {SpeakersPage} from "../speakers/speakers";
import {UpdatesPage} from "../updates/updates";
import {HomePage} from "../home/home";

@Component({
  selector: 'app-root',
  templateUrl: 'app-root.html'
})
export class AppRoot{
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;


  constructor(public navCtrl: NavController, ){
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

  openPage(page) {
    // push instead of setRoot to make home is the default root
    if (page.title === 'Home') return;
    this.navCtrl.push(page.component);
  }


}
