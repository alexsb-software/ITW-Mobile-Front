import {Component, OnInit} from '@angular/core';
import { NavController , LoadingController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public speakersProvider: SpeakersProvider, public loading: LoadingController) {
  }


  ngOnInit(){
    let loader = this.loading.create({
        content: 'Please Wait...'
      })
    loader.present();
    this.speakersProvider.getData().subscribe(success =>{
      // console.log(success);
      this.speakers = success;
      this.speakersProvider.speakers = success;
      loader.dismiss();
    }, err =>{
      console.log("error getting speakers", err);
      loader.dismiss();
    })
  }

  goToSpeaker(id: number): void{
    console.log(id);
    
    this.navCtrl.push(SpeakerPage, {id: id})
  }

}
