import { Component, OnInit } from '@angular/core';
import { AlertController, App, ModalController, NavController, LoadingController } from "ionic-angular";
import { Storage } from '@ionic/storage'
import { Session } from "../../../model/Session.model";
import { SessionsProvider } from "../../../providers/sessions/sessions";
import { FilterPage } from "../filter/filter";
import { SessionPage } from "../../session/session";
import { apiEndPoint } from "../../../app/app.module";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'tab-day1',
  templateUrl: 'day1.html',
})
export class Day1Page implements OnInit {

  day1Sessions: Session[];
  filteredSessions: Session[];
  filterType: string;
  filterCategory: string;

  constructor(public loading: LoadingController, public sessionsProvider: SessionsProvider, public modalCtrl: ModalController, public navCtrl: NavController,
    public appCtrl: App, public http: Http, public alertCtrl: AlertController, public storage: Storage) {
    this.filterType = 'All';
    this.filterCategory = 'All';
  }

  ngOnInit() {
    let loader = this.loading.create({
      content: 'Please Wait...'
    });
    loader.present();
    this.sessionsProvider.getData().subscribe(success => {
      this.sessionsProvider.sessions = success;
      this.day1Sessions = success.filter(session => session.day === 1);
      this.filteredSessions = this.day1Sessions;
      loader.dismiss();
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
      this.filteredSessions = this.day1Sessions;
      return
    }
    else if (this.filterType === 'All')
      this.filteredSessions = this.day1Sessions.filter(session => {
        return session.categories.find((category) => {
          return category.name === this.filterCategory
        })
      });
    else if (this.filterCategory === 'All')
      this.filteredSessions = this.day1Sessions.filter(session => session.type === this.filterType);
    else
      this.filteredSessions = this.day1Sessions.filter(session => {
        return session.type === this.filterType && session.categories.find((category) => {
          return category.name === this.filterCategory;
        })
      })
  }

  goToSession(id: number) {
    this.appCtrl.getRootNav().push(SessionPage, { id: id })
  }
  bookmarkSession(sessionId: number) {
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
      content = 'You have already reserved this.'
    else if (msg === 'Unauthorized') {
      content = 'Unverified users are not allowed to reserve a session.'
      title = 'Verify'
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
  showConfirm(sessionId: number) {
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
            this.bookmarkSession(sessionId);
          }
        }
      ]
    });
    confirm.present();
  }


}
