import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Mechprovider } from '../../providers/mechprovider';
import { NativeStorage} from 'ionic-native';
import { FirstPage } from '../first/first';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [Mechprovider]
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public mech: Mechprovider) {

  }

  ionViewDidLoad() {
 //console.log(this.mech.car);

    }
    logout(){
      NativeStorage.setItem('user', "");
      this.navCtrl.setRoot(FirstPage);

    }


}
