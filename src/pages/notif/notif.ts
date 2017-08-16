import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LocalNotifications} from "@ionic-native/local-notifications";



@Component({
  selector: 'page-notif',
  templateUrl: 'notif.html',
})
export class NotifPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private localnotifications: LocalNotifications) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifPage');
  }
  notify(){
    console.log("Clicked");
    this.localnotifications.schedule({
      title: 'Hay',
      text:'Hello, World'
    });
  }
}
