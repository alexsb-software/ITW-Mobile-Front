import {Component, OnInit} from '@angular/core';
import { NavController , LoadingController , ToastController } from 'ionic-angular';
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

  constructor( public toastCtrl: ToastController , public navCtrl: NavController, public speakersProvider: SpeakersProvider, public loading: LoadingController) {
  }


  ngOnInit(){
    let loader = this.loading.create({
        content: 'Please Wait...'
      })
    loader.present();
    this.speakersProvider.getData().subscribe(success =>{
      this.speakers = success;
      this.speakersProvider.speakers = success;
      loader.dismiss();
    }, err =>{
      console.log("error getting speakers", err);
      loader.dismiss();
      let toast = this.toastCtrl.create({
          message: 'Sorry something went wrong',
          duration: 3500,
          position: 'bottom'
        })
        toast.present()
    })
  }

  goToSpeaker(id: number): void{
    this.navCtrl.push(SpeakerPage, {id: id})
  }

}
