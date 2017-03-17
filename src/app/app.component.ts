import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, NativeStorage, LocationAccuracy } from 'ionic-native';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProfilePage } from '../pages/profile/profile';
import { FirstPage } from '../pages/first/first'; 
import { HistoryPage } from '../pages/history/history';
import { Mechprovider } from '../providers/mechprovider';
import { CardPage } from '../pages/card/card';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public mech : Mechprovider,public push: Push) {
    this.initializeApp();
         NativeStorage.getItem('user')
  .then(
    data => {
      if(data == "" || data == null) {
       this.rootPage = FirstPage;
      }else{
        this.rootPage = Page1;
        console.log(data)
      }
      },
    
    error => {
        this.rootPage = FirstPage;

      console.error(error)
    }
  );
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1 },
      { title: 'Profile', component: ProfilePage },
      { title: 'Card' , component : CardPage },
      { title: 'History' , component : HistoryPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      LocationAccuracy.canRequest().then((canRequest: boolean) => {

  if(canRequest) {
    // the accuracy option will be ignored by iOS
    LocationAccuracy.request(LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => console.log('Request successful'),
      error => console.log('Error requesting location permissions', error)
    );
  }

});
               this.push.register().then((t: PushToken) => {
  return this.push.saveToken(t);
}).then((t: PushToken) => {
  this.mech.tokenrefresh(t.token);
  console.log('Token saved:', t.token);

});
this.push.rx.notification()
  .subscribe((msg) => {
    alert(msg.title + ': ' + msg.text);
  });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
   
      Splashscreen.hide();
        NativeStorage.getItem('user').then( profile =>{
         this.mech.setMyGlobalVar(profile[0]);
         console.log("success"); 
     
    });
          var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window["plugins"].OneSignal
    .startInit("6b57d33d-d4b9-47a1-bc50-5c1dbda6e077", "139908526389")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
