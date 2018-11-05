import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map.page';
import { JoinGamePage } from '../joingame/joingame.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  public toMap(event){
    this.navCtrl.push(MapPage);
  }
  public toJoinGame(event){
    this.navCtrl.push(JoinGamePage)
  }
}
