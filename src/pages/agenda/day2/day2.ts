import { Component, OnInit } from '@angular/core';
import { AlertController, App, ModalController, LoadingController, ToastController } from "ionic-angular";
import { Storage } from '@ionic/storage'
import { Session } from "../../../model/Session.model";
import { SessionsProvider } from "../../../providers/sessions/sessions";
import { FilterPage } from "../filter/filter";
import { SessionPage } from "../../session/session";
import { apiEndPoint } from "../../../app/app.module";
import { RequestOptions, Headers, Http } from "@angular/http";
import { ReservationsProvider } from '../../../providers/reservations/reservations';

@Component({
  selector: 'tab-day2',
  templateUrl: 'day2.html',
})
export class Day2Page implements OnInit {

  day2Sessions: Session[];
  filteredSessions: Session[];
  sessions: Session[];
  filterType: string;
  filterCategory: string;

  constructor(public reservationsProvider: ReservationsProvider,public toastCtrl: ToastController, public loading: LoadingController, public sessionsProvider: SessionsProvider,
    public modalCtrl: ModalController, public appCtrl: App,
    public alertCtrl: AlertController, public http: Http, public storage: Storage) {
    this.filterType = 'All';
    this.filterCategory = 'All';
  }

  ngOnInit() {
    let loader = this.loading.create({
      content: 'Please Wait...'
    })
    loader.present();
    this.storage.get('token').then(token => {
      this.storage.get('user').then(data => {
        let user = JSON.parse(data)
        this.reservationsProvider.getReservations(user.id, token).subscribe((success) => {
          this.reservationsProvider.sessions = success;
          this.sessions = success;
          this.sessionsProvider.getData().subscribe(success => {
            this.sessionsProvider.sessions = success;
            this.day2Sessions = success.filter(session => session.day === 2);
            this.filteredSessions = this.day2Sessions;
            for ( let filter of this.filteredSessions ) {
              for ( let session of this.sessions) {
                if ( filter.id === session.id && filter.bookmark !== true) { filter.bookmark = true;}
                else { filter.bookmark = false;}
              }
            }
            loader.dismiss();
          }, err => {
            loader.dismiss();
          })
        }, (err) => {
          loader.dismiss();
        })
      })
    })
    
  }

  openModal() {
    let modal = this.modalCtrl.create(FilterPage, { type: this.filterType, category: this.filterCategory }, {
      enableBackdropDismiss: true
    });
    modal.onDidDismiss(data => {
      if (data !== null) {
        this.filterType = data['type']
        this.filterCategory = data['category']
        this.filterSessions()
      }
    });
    modal.present();
  }

  filterSessions() {
    if (this.filterType === 'All' && this.filterCategory === 'All') {
      this.filteredSessions = this.day2Sessions;
      return
    }
    else if (this.filterType === 'All')
      this.filteredSessions = this.day2Sessions.filter(session => {
        return session.categories.find((category) => {
          return category.name === this.filterCategory
        })
      });
    else if (this.filterCategory === 'All')
      this.filteredSessions = this.day2Sessions.filter(session => session.type === this.filterType);
    else
      this.filteredSessions = this.day2Sessions.filter(session => {
        return session.type === this.filterType && session.categories.find((category) => {
          return category.name === this.filterCategory;
        })
      })
  }

  goToSession(id: number) {
    this.appCtrl.getRootNav().push(SessionPage, { id: id })
  }
  bookmarkSession(session: any,sessionId: number) {
    let loader = this.loading.create({
      content: 'Please Wait...'
    })
    loader.present();
    this.storage.get('token').then(data => {
      let token = JSON.parse(data)
      this.storage.get('user').then(data => {
        let user = JSON.parse(data)
        let headers = new Headers()

        headers.append('Authorization', 'Bearer ' + token.replace(/"/g, ''))
        headers.append('Access-Control-Allow-Origin', '*')

        let options = new RequestOptions({ headers: headers })

        this.http.post(apiEndPoint + '/users/' + user.id + "/add/session/" + sessionId, {}, options).map(data => data.json()).subscribe(
          (res) => {
            loader.dismiss();
            this.showDoneAlert();
            session.bookmark = true;
          },
          (err) => {
            loader.dismiss();
            this.showFailAlert(JSON.parse(err._body).error);
          }

        );

      })
    })
  }

  showDoneAlert() {
    let alert = this.alertCtrl.create({
      title: 'Done',
      subTitle: 'Session has been reserved',
      buttons: ['OK']
    });
    alert.present();
  }

  showFailAlert(msg) {
    let content = null
    let title = null
    if (msg === 'User already reserved this session')
      content = 'Please go to the registration desk to remove your reservation'
    else if (msg === 'Unauthorized') {
      content = 'Unverified users are not allowed to reserve a session.'
      title = 'Verify'
    } else if (msg === 'Can\'t reserve more slots of this type') {
      content = 'You can reserve only one slot of this type';
    } else {
      content = 'Something has gone wrong please reserve your session'
    }

    let alert = this.alertCtrl.create({
      title: title || 'Error',
      subTitle: content,
      buttons: ['OK']
    });
    alert.present();
  }
  showConfirm(session: any,sessionId: number) {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure you want to reserve this session?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.bookmarkSession(session,sessionId);
          }
        }
      ]
    });
    confirm.present();
  }

}
