import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController,
          AlertController,ModalController,
          ViewController, Platform, Events} from 'ionic-angular';
import { Mechprovider } from '../../providers/mechprovider';

import {Http} from '@angular/http';
 /*
  Generated class for the Page3Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
	detail: any;
	Details: any;
	user: any;
  info: any;
  constructor(private navCtrl: NavController,public navParams: NavParams, public loadingCtrl: LoadingController, 
  	public http: Http, public mech	: Mechprovider) {
    this.info = this.navParams.get('Booking');

}

ionViewDidLoad(){
 this.user = this.mech.getMyGlobalVar();
 let mail = this.user.email;
    //console.log(this.user, "tg");
    let loading = this.loadingCtrl.create({
            content: "Loading..."
        });

        loading.present();
     var cardata = this.http.get('https://still-taiga-32576.herokuapp.com/api/book/'+mail)
                   .map(res => res.json()).subscribe(data => { 
                      loading.dismiss().then( () => {

                          this.Details = data;

                      });
                     
                     //console.log(data);
                   });


  }

  }