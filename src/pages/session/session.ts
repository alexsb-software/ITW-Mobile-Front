import { Component, OnInit } from '@angular/core';
import { NavController, NavParams , LoadingController , ToastController} from 'ionic-angular';
import { Session } from "../../model/Session.model";
import { SessionsProvider } from "../../providers/sessions/sessions";
import { SpeakerPage } from "../speaker/speaker";

/**
 * Generated class for the SessionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage implements OnInit {

  session: Session;

  constructor( public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public sessionsProvider: SessionsProvider, public loading: LoadingController ) {
    this.session = new Session()
  }

  ngOnInit() {
    let loader = this.loading.create({
        content: 'Please Wait...'
      })
    loader.present();
    this.sessionsProvider.getSessionById(this.navParams.get('id')).subscribe(
      response => {
      this.session = response
      loader.dismiss();
      },
      (err) => {
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Sorry something went wrong',
          duration: 3500,
          position: 'bottom'
        })
        toast.present()
      })
  }

  goToSpeaker(id: number) {
    this.navCtrl.push(SpeakerPage, { id: id })
  }

}
