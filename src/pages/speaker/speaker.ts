import { Component, OnInit } from '@angular/core';
import { NavController, NavParams , LoadingController , ToastController} from 'ionic-angular';
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

  constructor( public toastCtrl: ToastController , public loading: LoadingController , public navCtrl: NavController, public navParams: NavParams, public speakersProvider: SpeakersProvider) {
    this.speaker = new Speaker();
  }

  ngOnInit() {
      let loader = this.loading.create({
        content: 'Please Wait...'
      })
      loader.present();
      this.speakersProvider.getSpeakerById(this.navParams.get('id')).subscribe(
        (data) => {
          this.speaker = data;
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
        }
      );
  }

}
