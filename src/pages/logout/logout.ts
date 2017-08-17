import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LogoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public storage: Storage) {
  }

  ngOnInit() {
    let loader = this.loadingCtrl.create({
      content: 'Please Wait...'
    })
    loader.present()
    this.storage.clear()
    loader.dismiss()
    this.navCtrl.goToRoot({})

  }

}
