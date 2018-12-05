import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as API from '../../providers/AlloutAPI/AlloutAPI';

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
  id: number; 
  question: String; 
  questionPoints: number; 


  constructor(public navCtrl: NavController, public API:API.AlloutProvider, public navParams: NavParams) {
    this.id = navParams.get('data'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    console.log(this.id); 
    this.API.getLocation(this.id).subscribe(result =>{
      this.question = result.question.questionText; 
      this.questionPoints = result.question.points;
    });
    console.log(this.question + " has " + this.questionPoints + " points on it."); 
  }
}