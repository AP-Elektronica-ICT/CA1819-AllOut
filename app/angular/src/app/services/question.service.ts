import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url: string = "http://localhost:33324/api/v1/question/";
  //url:string = "https://alloutapi20181206110549.azurewebsites.net/api/v1/question/";


  constructor(private http : HttpClient) { }

  getAllQuestions(){
    return this.http.get<IQuestion[]>(this.url);
  }
  getQuestionById(id : number){
    return this.http.get<IQuestion>(this.url + id);
  }
  updateQuestion(question : IQuestion){
    return this.http.put<IQuestion>(this.url, question);
  }
  postQuestion(question : IQuestion){
    return this.http.post<IQuestion>(this.url, question);
  }
}

export interface IQuestion {
  questionID?: number;
  questionType: number;
  questionText: string;
  points: number;
  isSolved?: boolean;
  answer: string;
}