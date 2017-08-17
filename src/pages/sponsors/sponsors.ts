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
      img: 'http://i.imgur.com/wLKl9dU.jpg'
    },
    {
      title: 'Vodafone Egypt',
      className: 'golden',
      img: 'http://dandymegamall.com/UpFiles/products/6d0dbdd7-5763-4a19-839f-8490978a1cbdxxx_m.png.ashx?width=236&height=236&crop=auto'
    },
    {
      title: 'ITIDA Egypt',
      className: 'silver',
      img: 'http://beta.itida.gov.eg/en/Gallery/PhotoGallery/Pictures/Album3/itida-1.jpg'
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
