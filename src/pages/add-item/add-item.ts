import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  title: string;
  amount: number;
  shopped: number;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem(){

    let newItem = {
      title: this.title,
      amount: this.amount,
      shopped: 0
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

}
