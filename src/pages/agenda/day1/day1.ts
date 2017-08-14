import {Component, OnInit} from '@angular/core';
import {AlertController, App, ModalController, NavController} from "ionic-angular";
import {Session} from "../../../model/Session.model";
import {SessionsProvider} from "../../../providers/sessions/sessions";
import {FilterPage} from "../filter/filter";
import {SessionPage} from "../../session/session";
import {BookmarkProvider} from "../../../providers/bookmark/bookmark";

@Component({
  selector: 'tab-day1',
  templateUrl: 'day1.html',
})
export class Day1Page implements OnInit{

  day1Sessions: Session[];
  filteredSessions: Session[];
  filterType:string;
  filterCategory:string;

  constructor(public sessionsProvider:SessionsProvider, public modalCtrl: ModalController, public navCtrl: NavController,
  public appCtrl: App , public bookmark : BookmarkProvider , public alertCtrl: AlertController) {
    this.filterType = 'All';
    this.filterCategory = 'All';
  }

  ngOnInit(){
    this.sessionsProvider.getData().subscribe(success => {
      this.sessionsProvider.sessions = success;
      this.day1Sessions = success.filter(session => session.day === 1);
      this.filteredSessions = this.day1Sessions
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
      this.filteredSessions = this.day1Sessions;
      return
    }
    else if (this.filterType === 'All')
      this.filteredSessions = this.day1Sessions.filter(session => {
        return session.categories.find( (category) => {
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

  goToSession (id: number) {
    this.appCtrl.getRootNav().push(SessionPage, {id: id})
  }
  bookmarkSession(sessionId: number){
    this.bookmark.bookMarkSession(sessionId).subscribe(
      (res)=>{
      console.log(res);
      this.showDoneAlert();
      },
      (err)=>{
        this.showFailAlert();
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
