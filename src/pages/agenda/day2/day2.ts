import {Component, OnInit} from '@angular/core';
import {Session} from "../../../model/Session.model";
import {SessionsProvider} from "../../../providers/sessions/sessions";

@Component({
  selector: 'tab-day2',
  templateUrl: 'day2.html',
})
export class Day2Page implements OnInit{

  day2Sessions: Session[];

  constructor(public sessionsProvider: SessionsProvider) {
  }

  ngOnInit(){
    if(this.sessionsProvider.sessions.length !== 0) {
      this.day2Sessions = this.sessionsProvider.sessions.filter(session => session.day === 2)
    }
    else {
      this.sessionsProvider.getData().subscribe(success => {
        this.day2Sessions = success.filter(session => session.day === 2)
      })
    }
  }
}
