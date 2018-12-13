import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map.page';
import { JoinGamePage } from '../joingame/joingame.page';
import { QuestionPage } from '../question/question';
import { identifierModuleUrl } from '@angular/compiler';
import * as API from '../../providers/AlloutAPI/AlloutAPI';

@Component({
    selector: 'page-home',
    templateUrl: 'home.page.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public API:API.AlloutProvider) {
    }
    id; 
    question; 
    answer; 
    questionPoints; 

    public toMap(event) {
        this.navCtrl.push(MapPage);
    }
    public toJoinGame(event) {
        this.navCtrl.push(JoinGamePage); 
    }
    public toQuestion(event) {
        this.API.getLocation(1).subscribe(result =>{
            this.id = result.locationID; 
            this.question = result.question.questionText; 
            this.answer = result.question.answer; 
            this.questionPoints = result.question.points; 
            this.navCtrl.push(QuestionPage, {
                data: this.id, 
                question: this.question, 
                answer: this.answer, 
                questionPoints: this.questionPoints
            });
        }) 
    }
}
