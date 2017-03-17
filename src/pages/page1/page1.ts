import {Component, ViewChild, ElementRef, NgZone} from '@angular/core';
import { Page2 } from '../page2/page2';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';
import { NavController } from 'ionic-angular';
import {LocalNotifications, GoogleMap, CameraPosition,
        GoogleMapsLatLng, GoogleMapsMarkerOptions,
        GoogleMapsMarker, GoogleMapsEvent,Geolocation, NativeAudio} from 'ionic-native';
import { Mechprovider } from '../../providers/mechprovider';
declare var google;


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
data: any;
type: any;
address: any;
servicecost: any;
Mlocation : any;
map: GoogleMap;
marker: any;
ready: any;
geocoder : any;
coord: any;
nearest: any;
time: any;
booked: any;
  constructor( public zone: NgZone,public navCtrl: NavController,public push: Push, public mech: Mechprovider) {
  	this.data = "loading.."
  	Geolocation.watchPosition().subscribe((pos) => {
        //console.log('pos', pos);
            this.coord = pos;
            let me = this;

           let location = new GoogleMapsLatLng(pos.coords.latitude, pos.coords.longitude);
  this.zone.run(() => {
               this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode( { 'location': location}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

        me.data = results[0].formatted_address;
       //console.log(me.data);
        Promise.resolve(me.data);
        return results;
        } else {
         this.map.refreshLayout();
        }

        });
            

             });
        
      });
    
  }
  ionViewDidLoad(){
                  
  }
makereq(type){
	this.navCtrl.push(Page2,{
    coord : this.coord,
    location : this.data,
    type: type,
    locationinfo : this.data,
    coordinates : this.coord

  });

}
}
