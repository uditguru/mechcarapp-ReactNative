import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Mechprovider } from '../../providers/mechprovider';
import { Page1 } from '../page1/page1';
import { NativeStorage } from 'ionic-native';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',

})
export class SignupPage {
mobile: any;
fullinfo: any;
userdata : any;
token : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mech: Mechprovider, public push: Push) {
  	this.userdata = {
  		name : null,
  		email: null
  	}
  	this.mobile = this.navParams.get('mobile');
  }

  ionViewDidLoad() {
    this.push.register().then((t: PushToken) => {
  return this.push.saveToken(t);
}).then((t: PushToken) => {
  this.token = t.token;
  //console.log('Token saved:', t.token);

});
    //console.log('ionViewDidLoad SignupPage');


  }
  signup(userdata){
  	let info = {
  		name : userdata.name,
  		email : userdata.email,
  		mobile : this.mobile,
      token : this.token
  	}
  	//console.log(info);

  	this.mech.saveuser(info).then(data =>{
  	 
  	});
    this.mech.auth(this.mobile).then( response =>{
      
          if(response !== [] || response !== "") {
                NativeStorage.setItem('user', response).then(
                () => "ok",

                error => console.error('Error storing item', error)
              );
                NativeStorage.getItem('user').then( profile =>{
         this.mech.setMyGlobalVar(profile[0]);
         //console.log("success"); 
     
    });
                this.navCtrl.setRoot(Page1);
      
    }
    

      //console.log(response);
    });
    
  }
}
