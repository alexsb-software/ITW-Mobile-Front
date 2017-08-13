import {Component, ElementRef, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import {AlertController} from 'ionic-angular';
import {AboutButtons} from "../../model/AboutButton.model";

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
   directionsService: any;
   directionsDisplay: any ;
  aboutButton: AboutButtons[] =[{iconName:'logo-facebook',buttonTitle:'FaceBook',color: '#3b5998',link: 'http://www.fb.com/IEEE.AlexSB' },
    {iconName:'logo-twitter',buttonTitle:'Twitter',color: '#0084b4',link: 'https://twitter.com/IEEEAlexSB' },
    {iconName:'globe',buttonTitle:'AlexSB',color: '#000000',link: 'http://www.alexsb.org' },
    {iconName:'bulb',buttonTitle:'#ITW_17',color: '#02bfdd',link: '#' }
    ];
  lat: number = 31.2089;
  lng: number = 29.9092;
  latLng = new google.maps.LatLng(this.lat, this.lng);
  pageTitle:string = "About ITW";
  constructor(private geolocation: Geolocation,private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  drawDirections(){
      this.geolocation.getCurrentPosition().then(
        (position)=>{
          let myLatLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          this.calculateAndDisplayRoute(this.directionsService,this.directionsDisplay,myLatLng);
        }).catch(
        (error)=>this.showAlert()
      );
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Navigation',
      subTitle: 'Please, switch on your location',
      buttons: ['OK']
    });
    alert.present();
  }

  loadMap(){
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    let mapOptions = {
      center: this.latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.directionsDisplay.setMap(this.map);
   /*
   new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.latLng
    });
    */
  }
  calculateAndDisplayRoute(directionsService, directionsDisplay,myLatLng) {
  directionsService.route({
    origin: myLatLng,
    destination: this.latLng,
    travelMode: 'WALKING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

}
