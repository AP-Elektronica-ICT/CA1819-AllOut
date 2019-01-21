import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlloutProvider, Game, Team, Question, Location } from '../../providers/AlloutAPI/AlloutAPI';
import { MapPage } from '../map/map.page';

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

  constructor(public navCtrl: NavController, public API:AlloutProvider, public navParams: NavParams, private toastCtrl: ToastController) {
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

  showToast(m: any) {
    let toast = this.toastCtrl.create({
        message: m,
        duration: 5000,
        position: 'top'
    });
    toast.present;
}
  checkAnswer(answer: any){
    this.API.getLocation(this.q.questionID).subscribe(result =>{
      if(answer == result.question.answer){
        this.API.changeQuestionAnswered(this.q.questionID, true); 
        this.team.totalPoints += this.q.points; 
        console.log(this.team); 
        this.API.putTeamPoints(this.team);
        var m = "That's correct!";
        console.log(m);
        this.showToast(m);

        this.navCtrl.push(MapPage)
      }
      else{
        var m = "Wrong answer!"
        console.log(m); 
        this.showToast(m);
      }
    })
  }
}
