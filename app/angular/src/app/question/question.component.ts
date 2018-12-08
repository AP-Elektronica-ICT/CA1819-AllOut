import { Component, OnInit } from '@angular/core';
import { LocationService, IQuestion } from '../services/location.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private locationService : LocationService, private route : ActivatedRoute) { }
  locationID : number;
  questionID : number;
  questionType : number;
  questionPoints : number;
  questionText : string;
  questionAnswer : string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.locationID = params['id'];
    });
    this.locationService.getLocationById(this.locationID).subscribe(
      result => {
        this.questionID = result.question.questionID;
        this.questionType = result.question.questionType;
        this.questionPoints = result.question.points;
        this.questionText = result.question.questionText;
        this.questionAnswer = result.question.answer;
      }
    );
  }
  updateQuestion(){
    var updateQuestion : IQuestion ={
      questionText : this.questionText,
      questionType : this.questionType,
    }
  }

}
