import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-menu',
  templateUrl: 'detalhes-menu.html',
})
export class DetalhesMenuPage {

  menu: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menu = navParams.get('menu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesMenuPage');
  }

}
