import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }

  getData() {
    return this.storage.get('toShop');
  }

  save(data) {
    this.storage.set('toShop', data);
  }

  getShoppedData() {
    return this.storage.get('shoppedItems');
  }

  saveShopped(data) {
    this.storage.set('shoppedItems', data);
  }

  addShopped(item: { shoppedTitle: string, shoppedAmount: number }) {
    this.getShoppedData()
      .then((data) => {
        data.push(item);
        this.saveShopped(data);
      })
  }
}
