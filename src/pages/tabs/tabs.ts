import { Component } from '@angular/core';


import {ShoppedItemPage} from "../shopped-item/shopped-item";
import {HomePage} from "../home/home";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShoppedItemPage;


  constructor() {

  }
}
