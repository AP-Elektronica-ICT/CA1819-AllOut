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
    question = "Hoe hoog is de kathedraal?"; 
    answer = "123"; 
    questionPoints = "10"; 

    public toMap(event) {
        this.navCtrl.push(MapPage);
    }
    public toJoinGame(event) {
        this.navCtrl.push(JoinGamePage); 
    }
    public toQuestion(event) {
        this.navCtrl.push(QuestionPage, {
            data: this.id, 
            question: this.question, 
            answer: this.answer, 
            questionPoints: this.questionPoints
        }); 
    }
}
