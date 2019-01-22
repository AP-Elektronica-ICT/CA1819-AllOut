import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map.page';
import { JoinGamePage } from '../joingame/joingame.page';
import { QuestionPage } from '../question/question';
import { identifierModuleUrl } from '@angular/compiler';
import { AlloutProvider, Game, Team, Question } from '../../providers/AlloutAPI/AlloutAPI';

@Component({
    selector: 'page-home',
    templateUrl: 'home.page.html'
})
export class HomePage {

    teamPoints: Number;
    q:Question = {
        questionID: 0, 
        questionText: "",
        questionType:0,
        isSolved: false,
        points: 0,
        answer: ""
      }
      team:Team = {
        teamID: 0,
        gameID: 0,
        teamName: "",
        totalBoobyTraps: 0,
        totalPoints: 0
    };
    
    constructor(public navCtrl: NavController, public API:AlloutProvider) {
    }
    ionViewDidLoad() {
        this.API.getLocation(1).subscribe(result =>{
            this.q = result.question; 
        });
        this.API.getGame(1).subscribe(result =>{
            this.team = result.team[0]; 
        });
    }
    public toMap(event) {
        this.navCtrl.push(MapPage);
    }
    public toJoinGame(event) {
        this.navCtrl.push(JoinGamePage); 
    }
    public toQuestion(event) {
        this.navCtrl.push(QuestionPage, {
            question: this.q, 
            team: this.team
        });
    }
}
