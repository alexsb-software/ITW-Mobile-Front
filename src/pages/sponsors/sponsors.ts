import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Sponsor } from "../../model/Sponsor.model";
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
  sponsors: Sponsor[] = [
    {
      title: 'NTRA Egypt',
      className: 'platinum',
      img: 'assets/img/ntra.png'
    },
    {
      title: 'Vodafone Egypt',
      className: 'golden',
      img: 'assets/img/vodafone.png'
    },
    {
      title: 'ITIDA Egypt',
      className: 'silver',
      img: 'assets/img/itida.jpg'
    }
  ];
  pageTitle: string = "SPONSORS";

  constructor(public loading: LoadingController, public navCtrl: NavController) {
  }

  ionViewWillEnter() {
    let loader = this.loading.create({
      content: 'Please Wait...'
    });
    loader.present();
    loader.dismiss();
  }


}
