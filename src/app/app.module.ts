import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { Data } from '../providers/data/data';
import {TabsPage} from "../pages/tabs/tabs";
import {ShoppedItemPage} from "../pages/shopped-item/shopped-item";
import {SplashScreen} from "@ionic-native/splash-screen"
import {StatusBar} from "@ionic-native/status-bar"
import {Vibration} from "@ionic-native/vibration";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    ShoppedItemPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    ShoppedItemPage,
    TabsPage
  ],
  providers: [StatusBar,
    SplashScreen,
    Data, Vibration, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
