import {Component, OnInit} from '@angular/core';
import {Session} from "../../../model/Session.model";
import {SessionsProvider} from "../../../providers/sessions/sessions";
import {ModalController} from "ionic-angular";
import {FilterPage} from "../filter/filter";

@Component({
  selector: 'tab-day1',
  templateUrl: 'day1.html',
})
export class Day1Page implements OnInit{

  day1Sessions: Session[];
  filteredSessions: Session[];
  filterType:string;
  filterCategory:string;

  constructor(public sessionsProvider:SessionsProvider, public modalCtrl: ModalController) {
    this.filterType = 'all';
    this.filterCategory = 'all';
  }

  ngOnInit(){
    if(this.sessionsProvider.sessions.length !== 0) {
      this.day1Sessions = this.sessionsProvider.sessions.filter(session => session.day === 1);
      this.filteredSessions = this.day1Sessions
    } else {
      this.sessionsProvider.getData().subscribe(success => {
        this.sessionsProvider.sessions = success;
        this.day1Sessions = success.filter(session => session.day === 1);
        this.filteredSessions = this.day1Sessions
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
      this.filteredSessions = this.day1Sessions;
      return
    }
    else if (this.filterType === 'all')
      this.filteredSessions = this.day1Sessions.filter(session => session.categories.indexOf(this.filterCategory) >= 0);
    else if (this.filterCategory === 'all')
      this.filteredSessions = this.day1Sessions.filter(session => session.type === this.filterType);
    else
      this.filteredSessions = this.day1Sessions.filter(session => {
        return session.type === this.filterType && session.categories.indexOf(this.filterCategory) >= 0
      })
  }


}
