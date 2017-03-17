import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the First page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FirstPage');
  }
login(){
	this.navCtrl.push(LoginPage);
}

}
