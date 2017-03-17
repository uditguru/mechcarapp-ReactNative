import { Component } from '@angular/core';
import { AddCars } from '../addvehicle/addvehicle';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Mechprovider } from '../../providers/mechprovider';
import { Page1 } from '../page1/page1';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  providers: [Mechprovider]
})
export class Page2 {
payement: any;
username: any;
vehicle: any;
location: any;  
coord : any;
type: any;
locinfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mech: Mechprovider, 
              public modalCtrl: ModalController, public alert: AlertController) {
     this.coord = this.navParams.get('coord');
     this.location = this.navParams.get('location');
     this.vehicle = null;
     this.payement = null;
     this.type = this.navParams.get('type');
     
    }


    ionViewDidLoad(){
      
    }
    book(res){
      //console.log(res);
      let info = {
        username : res.name,
        email : res.email,
        mobile: res.mobile,
        vehicle : this.vehicle,
        payment : this.payement,
        type : this.type,
        location : this.location,
        coord :{
          lat: this.coord.coords.latitude,
          lng: this.coord.coords.longitude
        },
        currentStat : "Accepted"
      };
      //console.log(info);
    this.mech.booking(info).then(data =>{
      //console.log(data);
      if(data) {
        let alert = this.alert.create({
    title: 'Success',
    subTitle: 'Booking was Scheduled',
    buttons: ['Dismiss']
  });
  alert.present();
} 
      
    });
    this.navCtrl.setRoot(Page1);
    }
    add(data){
      let info = data;
      let modal = this.modalCtrl.create(AddCars,{
        userinfo: info
      });
      modal.present();
    }
  }

 