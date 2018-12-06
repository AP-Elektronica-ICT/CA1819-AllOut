import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map.page';
import { JoinGamePage } from '../joingame/joingame.page';
import { QuestionPage } from '../question/question';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
    selector: 'page-home',
    templateUrl: 'home.page.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }
    id = 25; 

    public toMap(event) {
        this.navCtrl.push(MapPage);
    }
    public toJoinGame(event) {
        this.navCtrl.push(JoinGamePage); 
    }
    public toQuestion(event) {
        this.navCtrl.push(QuestionPage, {
            data: this.id
        }); 
    }
}
