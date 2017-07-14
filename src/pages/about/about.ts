import {Component, ElementRef, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, NavParams } from 'ionic-angular';
import {AboutButtons} from "../../model/aboutButtons.model";

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
  aboutButton: AboutButtons[] =[{iconName:'logo-facebook',buttonTitle:'FaceBook',color: '#3b5998' },
    {iconName:'logo-twitter',buttonTitle:'Twitter',color: '#0084b4' },
    {iconName:'globe',buttonTitle:'AlexSB',color: '#000000' },
    {iconName:'bulb',buttonTitle:'#ITW',color: '#02bfdd' }
    ];
  lat: number = 31.2089;
  lng: number = 29.9092;
  latLng = new google.maps.LatLng(this.lat, this.lng);
  pageTitle:string = "About ITW";
  constructor(private geolocation: Geolocation, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.loadMap();
  }
  goBack(){
    console.log("back");
  }
  drawDirections(){
      this.geolocation.getCurrentPosition().then(
        (position)=>{
          let myLatLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          this.calculateAndDisplayRoute(this.directionsService,this.directionsDisplay,myLatLng);
        }).catch(
        (error)=> console.log(error)
      );
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
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

}
