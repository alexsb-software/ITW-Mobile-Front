import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Session} from "../../model/Session.model";
import {SessionsProvider} from "../../providers/sessions/sessions";
import {SpeakerPage} from "../speaker/speaker";

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
export class SessionPage implements OnInit{

  session: Session;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sessionsProvider: SessionsProvider) {
    this.session = new Session()
  }

  //TODO: replace this to getSessionById only
  ngOnInit () {
    if (this.sessionsProvider.sessions.length < 1) {
      this.sessionsProvider.getData().subscribe((success) => {
        this.sessionsProvider.sessions = success.data
        this.session = this.sessionsProvider.getSessionById(this.navParams.get('id'))
      })
    } else {
      this.session = this.sessionsProvider.getSessionById(this.navParams.get('id'))
    }
  }

  goToSpeaker (id: number) {
    this.navCtrl.push(SpeakerPage, {id: id})
  }

}
