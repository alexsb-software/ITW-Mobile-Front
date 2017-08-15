import { Component } from '@angular/core';
import { NavController , LoadingController } from 'ionic-angular';
import {Sponsor} from "../../model/Sponsor.model";
/**
 * Generated class for the SponsorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {

  plat: string[] = [
    'https://s-media-cache-ak0.pinimg.com/736x/7c/dd/3c/7cdd3c7dd3c55788892c3ecdbe66fb5d.jpg'
  ];
  gold: string[] = [
    'https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Technology-Science-Logo-3.png',
    'https://ckgd.net/wp2/wp-content/uploads/rapid-connect-logo-design-technology-it-servers.jpg',
    'https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Technology-Science-Logo-3.png',
    'https://ckgd.net/wp2/wp-content/uploads/rapid-connect-logo-design-technology-it-servers.jpg'
  ];
  silver: string[] = [
    'https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Technology-Science-Logo-3.png',
    'https://ckgd.net/wp2/wp-content/uploads/rapid-connect-logo-design-technology-it-servers.jpg',
    'https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Technology-Science-Logo-3.png',
    'https://ckgd.net/wp2/wp-content/uploads/rapid-connect-logo-design-technology-it-servers.jpg'
  ];
  sponsors: Sponsor[] = [
    {
      title: 'PLATINUM SPONSORS',
      className: 'platinum',
      imgs: this.plat
    },
    {
      title: 'GOLDEN SPONSORS',
      className: 'golden',
      imgs: this.gold
    },
    {
      title: 'SILVER SPONSORS',
      className: 'silver',
      imgs: this.silver
    }
  ];
  pageTitle: string = "SPONSORS";

  constructor( public loading: LoadingController , public navCtrl: NavController) {
  }

  ionViewWillEnter() {
    let loader = this.loading.create({
        content: 'Please Wait...'
      });
    loader.present();
    console.log('ionViewDidLoad SponsorsPage');
    loader.dismiss();
  }


}
