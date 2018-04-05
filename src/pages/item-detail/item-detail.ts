import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  title;
  amount;

  constructor(public navParams: NavParams){

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.amount = this.navParams.get('item').amount;
  }

}
