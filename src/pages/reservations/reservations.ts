import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Session } from "../../model/Session.model";
import { ReservationsProvider } from "../../providers/reservations/reservations";

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

  constructor(public reservationsProvider: ReservationsProvider, public storage: Storage) {
    this.sessions = [];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ReservationsPage');
  }

  ngOnInit() {
    this.storage.get('user').then(data => {
      let user = JSON.parse(data)

      this.reservationsProvider.getReservations(user.id).subscribe((success) => {
        this.reservationsProvider.sessions = success;
        this.sessions = success;
      })
    })

  }

}
