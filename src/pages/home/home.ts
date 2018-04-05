import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item'
import {ItemDetailPage} from '../item-detail/item-detail';
import {Data} from "../../providers/data/data";
import {Vibration} from '@ionic-native/vibration';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];
  public itemShopped = [];
  shoppedTitle: string;
  shoppedAmount: number;

  className: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, private vibration: Vibration, ) {


  }

  ionViewDidEnter() {
    this.dataService.getData().then((toShop) => {

      if (toShop) {
        this.items = toShop;
      }

    });
  }

  ionViewDidLoad() {

  }

  addItem() {

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {

      if (item) {
        this.saveItem(item);
      }

    });


    addModal.present();

  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  deleteItem(item) {

    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.dataService.save(this.items);
      this.vibration.vibrate(4000);


    }
  }

  shoppedItem(item) {
    let index = this.items.indexOf(item);
    if (index > -1) {

      let newItem = {
        shoppedTitle: this.items[index].title,
        shoppedAmount: this.items[index].amount,
      };


//      this.itemShopped.push(newItem);
//      this.dataService.saveShopped(this.itemShopped);

      this.dataService.addShopped(newItem);


      this.items.splice(index, 1);
      this.dataService.save(this.items);
      this.vibration.vibrate(1000);

      console.log("Shopped", newItem);
      //this.itemShopped[index] = item;

//      this.itemShopped = [];
    }
  }


}
