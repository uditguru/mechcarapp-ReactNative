import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProfilePage } from '../pages/profile/profile';
import { FirstPage } from '../pages/first/first';
import { LoginPage } from '../pages/login/login';
import { OtpverifyPage } from '../pages/otpverify/otpverify';
import { SignupPage } from  '../pages/signup/signup';
import { CardPage } from '../pages/card/card';
import { HistoryPage } from '../pages/history/history';
import { Mechprovider } from '../providers/mechprovider';
import { AddCars } from '../pages/addvehicle/addvehicle';
import { NativeStorage} from 'ionic-native';



const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'bfffa603',
  },
  'push': {
    'sender_id': '139908526389',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ProfilePage,
    FirstPage,
    LoginPage,
    OtpverifyPage,
    SignupPage,
    CardPage,
    AddCars,
    HistoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ProfilePage,
    FirstPage,
    LoginPage,
    OtpverifyPage,
    SignupPage,
    CardPage,
    AddCars,
    HistoryPage
  ],
  providers: [ Mechprovider ,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
