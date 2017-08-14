import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiEndPoint } from '../../app/app.module';
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

  getSpeakerById (id:number) {
    return this.http.get(apiEndPoint + '/speakers/' + id).map(data => data.json())
  }

  getData() {
    return this.http.get(apiEndPoint + '/speakers').map(data => data.json())
  }
}
