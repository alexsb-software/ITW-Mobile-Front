import {Component, OnInit} from '@angular/core';
import {Session} from "../../../model/Session.model";
import {SessionsProvider} from "../../../providers/sessions/sessions";
import {AlertController, PopoverController} from "ionic-angular";
import {FilterPage} from "../filter/filter";

@Component({
  selector: 'tab-day1',
  templateUrl: 'day1.html',
})
export class Day1Page implements OnInit{

  day1Sessions: Session[];
  filteredSessions: Session[];

  constructor(public sessionsProvider:SessionsProvider, public popOverCtrl: PopoverController, public alertCtrl: AlertController) {

  }

  ngOnInit(){
    if(this.sessionsProvider.sessions.length !== 0) {
      this.day1Sessions = this.sessionsProvider.sessions.filter(session => session.day === 1);
      this.filteredSessions = this.day1Sessions
    }

    else {
      this.sessionsProvider.getData().subscribe(success => {
        this.sessionsProvider.sessions = success;
        this.day1Sessions = success.filter(session => session.day === 1);
        this.filteredSessions = this.day1Sessions
      })
    }
  }

  openPopOver(event){
    let popover = this.popOverCtrl.create(FilterPage, {}, {
      enableBackdropDismiss: true
    });
    popover.onDidDismiss(data => {
      if(data !== null)
        this.filterSessions(data['type'])
    });
    popover.present({
      ev: event
    });
  }

  filterSessions(type){
    this.filteredSessions = this.day1Sessions.filter(session => {
      return session.type === type
    })
  }

  openFilter(){
    let prompt = this.alertCtrl.create({
      title: 'Filter Sessions',
      message: 'Select option',
      inputs : [
        {
          type:'radio',
          label:'Workshops',
          value:'workshop'
        },
        {
          type:'radio',
          label:'Lectures',
          value:'lecture'
        },
        {
          type:'radio',
          label:'Galleries',
          value:'gallery'
        }

      ],
      buttons : [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Search",
          handler: data => {
            console.log(data);
            this.filterSessions(data)
          }
        }
      ]
    });
    prompt.present();
  }

}
