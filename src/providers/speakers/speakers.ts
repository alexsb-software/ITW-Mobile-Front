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
    this.speakers = []
  }

  getSpeakerById(id:number): Speaker{
    let i;
    for (i=0; i<this.speakers.length; i++){
      if(this.speakers[i].id === id)
        return this.speakers[i]
    }
  }
  //TODO: uncomment
  // getSpeakerById (id:number) {
  //   return this.http.get('' + id).map(data => data.json())
  // }

  getData(){
    return this.http.get('assets/API/speakers.json').map(data => data.json())
  }
}
