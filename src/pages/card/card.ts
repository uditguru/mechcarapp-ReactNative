import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Card page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {
card: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  	this.card = "Hello";
    //console.log('ionViewDidLoad CardPage');
  }

}