import {Component, OnInit} from '@angular/core';
import {Session} from "../../../model/Session.model";
import {SessionsProvider} from "../../../providers/sessions/sessions";

@Component({
  selector: 'tab-day1',
  templateUrl: 'day1.html',
})
export class Day1Page implements OnInit{

  day1Sessions: Session[];

  constructor(public sessionsProvider:SessionsProvider) {

  }

  ngOnInit(){
    if(this.sessionsProvider.sessions.length !== 0)
      this.day1Sessions = this.sessionsProvider.sessions.filter(session => session.day === 1);
    else {
      this.sessionsProvider.getData().subscribe(success => {
        this.sessionsProvider.sessions = success;
        this.day1Sessions = success.filter(session => session.day === 1);
      })
    }
  }

}
