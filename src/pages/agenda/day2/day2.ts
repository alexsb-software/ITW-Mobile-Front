import {Component, OnInit} from '@angular/core';
import {AlertController, App, ModalController , LoadingController , ToastController } from "ionic-angular";
import {Session} from "../../../model/Session.model";
import {SessionsProvider} from "../../../providers/sessions/sessions";
import {FilterPage} from "../filter/filter";
import {SessionPage} from "../../session/session";
import {BookmarkProvider} from "../../../providers/bookmark/bookmark";

@Component({
  selector: 'tab-day2',
  templateUrl: 'day2.html',
})
export class Day2Page implements OnInit{

  day2Sessions: Session[];
  filteredSessions: Session[];
  filterType:string;
  filterCategory:string;

  constructor( public toastCtrl: ToastController , public loading: LoadingController , public sessionsProvider: SessionsProvider, public modalCtrl: ModalController, public appCtrl: App,
              public alertCtrl: AlertController,public bookmark: BookmarkProvider) {
    this.filterType = 'All';
    this.filterCategory = 'All';
  }

  ngOnInit(){
    let loader = this.loading.create({
        content: 'Please Wait...'
      })
    loader.present();
    this.sessionsProvider.getData().subscribe(success => {
      this.sessionsProvider.sessions = success;
      this.day2Sessions = success.filter(session => session.day === 2);
      this.filteredSessions = this.day2Sessions;
      loader.dismiss();
    })
  }

  openModal(){
    let modal = this.modalCtrl.create(FilterPage, {type: this.filterType, category: this.filterCategory}, {
      enableBackdropDismiss: true
    });
    modal.onDidDismiss(data => {
      if(data !== null){
        this.filterType = data['type']
        this.filterCategory = data['category']
        this.filterSessions()
      }
    });
    modal.present();
  }

  filterSessions(){
    if (this.filterType === 'All' && this.filterCategory === 'All') {
      this.filteredSessions = this.day2Sessions;
      return
    }
    else if (this.filterType === 'All')
      this.filteredSessions = this.day2Sessions.filter(session => {
        return session.categories.find( (category) => {
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

  goToSession (id: number) {
    this.appCtrl.getRootNav().push(SessionPage, {id: id})
  }
  bookmarkSession(sessionId: number){
    let loader = this.loading.create({
        content: 'Please Wait...'
      })
      loader.present();
    this.bookmark.bookMarkSession(sessionId).subscribe(
      (res) => {
        console.log(res)
        this.showDoneAlert();
        loader.dismiss();
      },
      (err) => {
        console.log(err)
        this.showFailAlert();
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Sorry something went wrong',
          duration: 3500,
          position: 'bottom'
        })
        toast.present()
      }
    );
  }

  showDoneAlert() {
    let alert = this.alertCtrl.create({
      title: 'Done',
      subTitle: 'Session has been reserved',
      buttons: ['OK']
    });
    alert.present();
  }

  showFailAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Something has gone wrong please reserve your session',
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
