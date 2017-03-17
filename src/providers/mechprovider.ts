import { Injectable, ViewChild, NgZone } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { NativeStorage} from 'ionic-native';
import 'rxjs/add/operator/map';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

/*
  Generated class for the Mechprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Mechprovider {

public data: any;
public user:Object;
public email: any;
userinfo : any;
car : any;  
  constructor(public http: Http, public push: Push) {
     NativeStorage.getItem('user').then( profile =>{
      this.user = profile[0];

      let username: any = this.user;
         let email = username.email;
          return new Promise(resolve => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');

   this.http.get('https://still-taiga-32576.herokuapp.com/api/centre/'+email)
                   .map(res => res.json()).subscribe(response => {
                     resolve(response);
                     this.car = response;
                   });
               });
     
    });

         //console.log('Hello Mechprovider Provider');

  }
setMyGlobalVar(value) {
    this.userinfo = value;
    //console.log("set was run");
  }

  getMyGlobalVar() {
        //console.log(this.userinfo);

    return this.userinfo;
  }
tokenrefresh(info){
 let tokn = {
   token : info,
   email : this.userinfo.email
 }

  return new Promise(resolve => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('https://still-taiga-32576.herokuapp.com/api/token', JSON.stringify(tokn), {headers: headers})
        .subscribe((details) => {
          resolve(details);
          
        });
 
    });

}

  saveuser(details){
 
    return new Promise(resolve => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('https://still-taiga-32576.herokuapp.com/api/adduser', JSON.stringify(details), {headers: headers})
        .subscribe((details) => {
          resolve(details);
          
        });
 
    });
 
  }
  booking(info){
        return new Promise(resolve => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('https://still-taiga-32576.herokuapp.com/api/book', JSON.stringify(info), {headers: headers})
        .subscribe((details) => {
          resolve(details);
          
        });
 
    });
  }
  
      saveVeh(cardtls){
 
    return new Promise(resolve => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      this.http.post('https://still-taiga-32576.herokuapp.com/api/addcar', JSON.stringify(cardtls), {headers: headers})
        .subscribe((cardtls) => {
          resolve(cardtls);
        });
 
    });
 
  }

 auth(number){

    return new Promise(resolve => {
  let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get('https://still-taiga-32576.herokuapp.com/api/authenticate/'+number)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 }
 getcars(){
   let me = this;
         //console.log(me.user, "one");
         
 
 }
}
