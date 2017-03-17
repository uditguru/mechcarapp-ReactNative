import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { OtpverifyPage } from '../otpverify/otpverify';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
rand: any;	
info: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  postTP(data){
  	 this.rand = Math.floor(1000 + Math.random() * 9000);
  	 this.http.get('https://control.msg91.com/api/sendhttp.php?authkey=91629AOW6QjOHJRP560a033b&mobiles=91'+data+'&message=OTP for MechCar is ' +this.rand+ '&sender=Mchcar&route=4&country=91').subscribe(
  	 	den => "Stop",
  	 	error => console.log(error));
  	this.info = {
  		mobile : data,
  		otp : this.rand
  	};
  	
  	this.navCtrl.push(OtpverifyPage,{
  		mobile : data,
  		otp : this.rand
  	});
  }

}
