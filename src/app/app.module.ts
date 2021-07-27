import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';


var firebaseConfig = {
  apiKey: "AIzaSyAuJ8G4V8xSI2THGpZQkzcOOS_h7Gbf3go",
  authDomain: "projt-7ca6c.firebaseapp.com",
  databaseURL: "https://projt-7ca6c.firebaseio.com",
  projectId: "projt-7ca6c",
  storageBucket: "projt-7ca6c.appspot.com",
  messagingSenderId: "214449020063",
  appId: "1:214449020063:web:73b196fa66b3441074d6aa",
  measurementId: "G-XEHT347JDE"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),AngularFireDatabaseModule,AngularFireModule.initializeApp(firebaseConfig), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
