import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListingsPage } from '../pages/listings/listings';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/register/register';
import { RecoverPage } from '../pages/recover/recover';
import { UserPage } from '../pages/user/user';
import { AddlistingPage } from '../pages/addlisting/addlisting'
import { ChangepasswordPage } from '../pages/changepassword/changepassword'
import { AboutPage } from '../pages/about/about';
import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { ConnectivityService } from '../providers/connectivity-service';
import { Camera } from 'ionic-native';
import { IonicStorageModule } from '@ionic/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyB11EG_8OeXo3CzSetngw7e0nQp86XL3xo",
    authDomain: "simple-subleasing.firebaseapp.com",
    databaseURL: "https://simple-subleasing.firebaseio.com",
    storageBucket: "simple-subleasing.appspot.com",
    messagingSenderId: "993168252989"
}

@NgModule({
  declarations: [
    MyApp,
    ListingsPage,
    MapPage,
    SettingsPage,
    HomePage,
    LoginPage,
    RegisterPage,
    RecoverPage,
    UserPage,
    AddlistingPage,
    ChangepasswordPage,
    TabsPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListingsPage,
    MapPage,
    SettingsPage,
    HomePage,
    LoginPage,
    RegisterPage,
    RecoverPage,
    UserPage,
    AddlistingPage,
    ChangepasswordPage,
    TabsPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, Camera, ConnectivityService]
})
export class AppModule {}
