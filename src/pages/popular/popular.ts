import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  popnew:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.http.get('https://www.reddit.com/r/popular/new.json?limit=20')
    .map(result=>result.json())
    .subscribe(data=>{this.popnew=data.data.children;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

}
