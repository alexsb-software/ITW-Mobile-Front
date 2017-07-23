import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Speaker } from "../../model/Speaker.model"

/*
  Generated class for the SpeakersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SpeakersProvider {

  public speakers: Speaker[];

  constructor(public http: Http) {

  }

  getSpeakerById(id:number): Speaker{
    let i;
    for (i=0; i<this.speakers.length; i++){
      if(this.speakers[i].id === id)
        break;
    }
    return this.speakers[i]
  }

  getData(){
    return this.http.get('assets/API/speakers.json').map(data => data.json())
  }
}
