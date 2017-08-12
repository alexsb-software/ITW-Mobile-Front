import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";

/*
  Generated class for the PusherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
declare var Pusher: any;

@Injectable()
export class PusherProvider {

  constructor(public http: Http,private toastCtrl: ToastController) {
       // Enable pusher logging - don't include this in production
   Pusher.logToConsole = true;
   let env = this;
   var pusher = new Pusher('80504eb8c8101f00cad9', {
     cluster: 'eu',
     encrypted: true
   });
    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      env.presentToast(data.message);
    });
  }

  presentToast(messege: string) {
    let toast = this.toastCtrl.create({
      message: messege,
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}