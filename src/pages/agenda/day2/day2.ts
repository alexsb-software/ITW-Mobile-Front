import {Component, OnInit} from '@angular/core';
import {App, ModalController} from "ionic-angular";
import {Session} from "../../../model/Session.model";
import {SessionsProvider} from "../../../providers/sessions/sessions";
import {FilterPage} from "../filter/filter";
import {SessionPage} from "../../session/session";

@Component({
  selector: 'tab-day2',
  templateUrl: 'day2.html',
})
export class Day2Page implements OnInit{

  day2Sessions: Session[];
  filteredSessions: Session[];
  filterType:string;
  filterCategory:string;

  constructor(public sessionsProvider: SessionsProvider, public modalCtrl: ModalController, public appCtrl: App) {
    this.filterType = 'all';
    this.filterCategory = 'all';
  }

  ngOnInit(){
    if(this.sessionsProvider.sessions.length !== 0) {
      this.day2Sessions = this.sessionsProvider.sessions.filter(session => session.day === 2)
      this.filteredSessions = this.day2Sessions
    } else {
      this.sessionsProvider.getData().subscribe(success => {
        this.sessionsProvider.sessions = success;
        this.day2Sessions = success.filter(session => session.day === 2)
        this.filteredSessions = this.day2Sessions
      })
    }
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
    if (this.filterType === 'all' && this.filterCategory === 'all') {
      this.filteredSessions = this.day2Sessions;
      return
    }
    else if (this.filterType === 'all')
      this.filteredSessions = this.day2Sessions.filter(session => session.categories.indexOf(this.filterCategory) >= 0);
    else if (this.filterCategory === 'all')
      this.filteredSessions = this.day2Sessions.filter(session => session.type === this.filterType);
    else
      this.filteredSessions = this.day2Sessions.filter(session => {
        return session.type === this.filterType && session.categories.indexOf(this.filterCategory) >= 0
      })
  }

  goToSession (id: number) {
    this.appCtrl.getRootNav().push(SessionPage, {id: id})
  }

}
