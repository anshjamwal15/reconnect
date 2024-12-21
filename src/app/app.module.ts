import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@capacitor/splash-screen';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {

  constructor () {}

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.show({
      autoHide: true,
    });
  
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  };
}