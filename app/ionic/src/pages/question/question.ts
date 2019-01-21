import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlloutProvider, Game, Team, Question, Location } from '../../providers/AlloutAPI/AlloutAPI';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  q:Question;
  l:Location; 
  team:Team; 

  constructor(public navCtrl: NavController, public API:AlloutProvider, public navParams: NavParams) {
    this.l = navParams.get('data'); 
    this.q = this.l.question; 
    console.log(this.l); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    console.log(this.q.questionID); 
    /*
    this.API.getLocation(this.id).subscribe(result =>{
      this.question = result.question.questionText; 
      this.questionPoints = result.question.points;
    });*/
    console.log(this.q.questionText + " has " + this.q.points + " points on it."); 
  }

  checkAnswer(answer: any){
    this.API.getLocation(this.q.questionID).subscribe(result =>{
      if(answer == result.question.answer){
        this.API.changeQuestionAnswered(this.q.questionID, true); 
        this.team.totalPoints += this.q.points; 
        console.log(this.team); 
        this.API.putTeamPoints(this.team); 
        console.log("it was true"); 
      }
      else{
        console.log("it was false"); 
      }
    })
  }
}
