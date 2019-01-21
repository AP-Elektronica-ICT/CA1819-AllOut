import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { QuestionService, IQuestion } from '../services/question.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private locationService : LocationService, private questionService : QuestionService, private route : ActivatedRoute) { }
  locationID : number;
  questionID : number;
  questionType : number;
  questionPoints : number;
  questionText : string;
  questionAnswer : string;

  question : IQuestion;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.locationID = params['id'];
    });
    this.locationService.getLocationById(this.locationID).subscribe(
      result => {
        this.question = result.question;
        this.questionID = result.question.questionID;
        this.questionType = result.question.questionType;
        this.questionPoints = result.question.points;
        this.questionText = result.question.questionText;
        this.questionAnswer = result.question.answer;
      }
    );
  }
  updateQuestion(){
    this.question.answer = this.questionAnswer;
    this.question.points = this.questionPoints;
    this.question.questionText = this.questionText;
    this.question.questionType = this.questionType;
    this.questionService.updateQuestion(this.question).subscribe();

  }

}
