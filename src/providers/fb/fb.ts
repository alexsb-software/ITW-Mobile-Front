import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import 'rxjs/add/operator/map';
import { ToastController } from "ionic-angular";


@Injectable()
export class FbProvider {

  private userAccessToken:string;
  private userId: number;
  private message:string = '#IEEE #IEEE_AlexSB #ITW #ITW_17';
  private _logedIn: boolean = false;
  private checkInMessage="You have Checked In successfully";
  private errMessage="Unfortunately, This action failed";
  private  place ='319131338420183';
  private FB_APP_ID=855905901238851;

  constructor(private http: Http, private fb: Facebook , private toastCtrl: ToastController) {
    this.fb.browserInit(this.FB_APP_ID,"v2.10")
  }
  onLogin(){
    return this.fb.login(['user_friends', 'email','publish_actions']);
  }
  checkIn(){
    this.fb.getLoginStatus()
      .then((res) => {
        if(res.status == 'connected'){
          this.userAccessToken = res.authResponse.accessToken;
          this.userId = res.authResponse.userID;
          alert("I am connected"+JSON.stringify(res));
          this.writeCheckinPost().subscribe(
            (data)=> this.presentToast(this.checkInMessage),
            (err)=> this.presentToast(this.errMessage)
          );
        }
      })
      .catch( e => console.log("Error in Check in",e));
  }
  writeCheckinPost(){
  let graphUrl = 'https://graph.facebook.com/';
  let url = graphUrl + this.userId + '/feed/';
  return this.http.post(url,
    { 'place' : this.place,
            'message' : this.message,
            'access_token' : this.userAccessToken
          })
    .map(response => response.json());
  }


  get logedIn(): boolean {
    return this._logedIn;
  }

  set logedIn(value: boolean) {
    this._logedIn = value;
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  share(){
    let options = {
      method: 'share'
    };
    this.fb.showDialog(options)
      .then(res=> console.log(res))
      .catch( e => console.log("Error in Share ",e));
  }

}
