import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  mnew:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.http.get('https://www.reddit.com/r/movies/new.json?limit=20')
    .map(result=>result.json())
    .subscribe(data=>{this.mnew=data.data.children;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }

  viewDetail(item){
    this.navCtrl.push(DetailPage ,{item:item})
  }
}
