import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpeakersProvider } from "../../providers/speakers/speakers";
import { Speaker } from "../../model/Speaker.model";

/**
 * Generated class for the SpeakerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-speaker',
  templateUrl: 'speaker.html',
})
export class SpeakerPage implements OnInit {
  speaker: Speaker;

  constructor(public navCtrl: NavController, public navParams: NavParams, public speakersProvider: SpeakersProvider) {
    this.speaker = new Speaker()
  }

  //TODO: change this to fetch speaker by id from api
  ngOnInit() {
    if (this.speakersProvider.speakers.length < 1)
      this.speakersProvider.getData().subscribe(success => {
        this.speakersProvider.speakers = success;
        this.speaker = this.speakersProvider.getSpeakerById(this.navParams.get('id'))
      }, err => {
        console.log("error while getting speakers", err)
      });
    else
      this.speaker = this.speakersProvider.getSpeakerById(this.navParams.get('id'))
  }

}
