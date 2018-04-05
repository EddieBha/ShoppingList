import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Data} from "../../providers/data/data";
import {ItemDetailPage} from "../item-detail/item-detail";
import {Vibration} from "@ionic-native/vibration";



@Component({
  selector: 'page-shopped-item',
  templateUrl: 'shopped-item.html',
})
export class ShoppedItemPage {
  public itemShopped = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data, private vibration: Vibration) {


  }


  ionViewDidEnter(){
    this.dataService.getShoppedData().then((shoppedItems)=> {
      if (shoppedItems){
        this.itemShopped = shoppedItems;
      }
    });
  }
  ionViewDidLoad() {

  }
  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
    shoppedDeleteItem(item){

      let index = this.itemShopped.indexOf(item);
      if(index > -1){
        this.itemShopped.splice(index, 1);
        this.dataService.saveShopped(this.itemShopped);
        this.vibration.vibrate(4000);



      }
    }

}

