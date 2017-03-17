import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { Mechprovider } from '../../providers/mechprovider';
import { NativeStorage } from 'ionic-native';
import { Page1 } from '../page1/page1';
/*
  Generated class for the Otpverify page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-otpverify',
  templateUrl: 'otpverify.html',
  providers: [Mechprovider]
})
export class OtpverifyPage {
info: any;
mobile:any;
otp: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mech: Mechprovider) {
  	this.mobile = this.navParams.get('mobile');
  	this.otp = this.navParams.get('otp');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad OtpverifyPage');
    
  }
  check(data){
  	let mobile = this.mobile;
  	this.mech.auth(mobile).then( response =>{
  		if(response == [] || response == "") { 
  				if(data == this.otp) {
  		this.navCtrl.push(SignupPage,{
  			mobile: this.mobile
  		});
  	}
  		} else {
  				if(data == this.otp) {
  					  	NativeStorage.setItem('user', response).then(
						    () => "ok",

						    error => console.error('Error storing item', error)
						  );
  					  	this.navCtrl.setRoot(Page1);
  		
  	}
  		}

  		//console.log(response);
  	});
  
  }
}
