import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppedItemPage } from './shopped-item';

@NgModule({
  declarations: [
    ShoppedItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppedItemPage),
  ],
})
export class ShoppedItemPageModule {}
