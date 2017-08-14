import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {SpeakersProvider} from "../../providers/speakers/speakers";
import {Speaker} from "../../model/Speaker.model";
import {SpeakerPage} from "../speaker/speaker";

/**
 * Generated class for the SpeakersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage implements OnInit{
  speakers: Speaker[];

  constructor(public navCtrl: NavController, public speakersProvider: SpeakersProvider) {
  }


  ngOnInit(){
    this.speakersProvider.getData().subscribe(success =>{
      // console.log(success);
      this.speakers = success;
      this.speakersProvider.speakers = success;
    }, err =>{
      console.log("error getting speakers", err);
    })
  }

  goToSpeaker(id: number): void{
    this.navCtrl.push(SpeakerPage, {id: id})
  }

}
