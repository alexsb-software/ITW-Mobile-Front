import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Session } from "../../model/Session.model";
import { ReservationsProvider } from "../../providers/reservations/reservations";
import {LoadingController, NavController, ToastController} from "ionic-angular";
import {SessionPage} from "../session/session";

/**
 * Generated class for the ReservationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html',
})
export class ReservationsPage implements OnInit {

  sessions: Session[];

  constructor(public reservationsProvider: ReservationsProvider, public storage: Storage,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController, public navCtrl: NavController) {
    this.sessions = [];
  }

  ngOnInit() {
    let loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    })
    loading.present()
    this.storage.get('token').then(token => {
      this.storage.get('user').then(data => {
        let user = JSON.parse(data)

        this.reservationsProvider.getReservations(user.id, token).subscribe((success) => {
          this.reservationsProvider.sessions = success;
          this.sessions = success;
          loading.dismiss()
        }, error => {
          let toast = this.toastCtrl.create({
            message: 'Something wrong happened, Please try again later.',
            duration: 3000,
            position: 'bottom'
          })
          loading.dismiss()
          toast.present()
        })
      })
    })

  }

  goToSession (id:number) {
    this.navCtrl.push(SessionPage, { id: id })
  }

}
