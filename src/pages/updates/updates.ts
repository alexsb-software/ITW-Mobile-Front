import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the UpdatesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-updates',
  templateUrl: 'updates.html',
})
export class UpdatesPage implements OnInit{

  updates: string[]=[];

  constructor( public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  getUpdates(refresher){
    this.storage.get('updates').then(
      success => {
        this.updates = success;
        if (refresher) refresher.complete()
      },
      err => console.log(err)
    )
  }
  ngOnInit(){
    this.storage.get('updates').then( data=> this.updates = data);
  }
}
