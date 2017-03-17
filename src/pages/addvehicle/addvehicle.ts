import { Component } from '@angular/core';
import { NavController ,ViewController,NavParams, ModalController, Events, MenuController} from 'ionic-angular';
import { Mechprovider } from '../../providers/mechprovider';
import {Http} from '@angular/http';
import { NativeStorage} from 'ionic-native';
import { default as swal } from 'sweetalert2';
import { Page1 } from '../page1/page1';
/*
  Generated class for the Addvehicle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addvehicle',
  templateUrl: 'addvehicle.html'
})
export class AddCars {
Centre : any;
Car : any;
Provider : any;
Payment: any;
Company:any;
data:any;
model: any;
Make : any;
Year : any;
myear:any;
id: any;
user: any;
  constructor(private viewCtrl: ViewController, private navParams: NavParams, 
              public modalCtrl: ModalController, public events: Events,
              private menu: MenuController,
              private navCtrl: NavController,
              private Servicecentre: Mechprovider,
               private http: Http,
                ) {
    this.Centre = this.navParams.get('Centre');
    this.Make = 'Loading...';
    this.Year = 'Loading...';
    this.Company = 'Loading...';

  }

 ionViewDidLoad(){
 this.user = this.Servicecentre.getMyGlobalVar();
    //console.log(this.user);
    var url = 'https://still-taiga-32576.herokuapp.com/api/makes';
    var response = this.http.get(url).map(res => res.json())
    .subscribe(data => {
      this.data = data[0].make;

      //console.log(data);
    });


  }
  dismiss(data) {
    this.viewCtrl.dismiss(data);
    this.events.publish('menu:closed', '');
  }
 req(){
    var md = this.Make;
    //console.log(this.Make);
    var url = 'https://still-taiga-32576.herokuapp.com/api/makes/'+md;
    var response = this.http.get(url).map(res => res.json())
    .subscribe(data => {
      
      this.model = data[0].make[0].model;
      //console.log(this.model);
    });
 }



  saveCar(){    
    let userVhcl = {
            id: this.user.email,
            Make: this.Make,
            Year: this.Year,
            Company: this.Company
           
  }
  //console.log(userVhcl);
   this.Servicecentre.saveVeh(userVhcl).then((res) => {
   	swal('Good job!',
  'Your Car was Added.',
  'success');

  }, (err) => {
            //console.log(err);
        });
   this.navCtrl.push(Page1);
this.viewCtrl.dismiss();
}
}