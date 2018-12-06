import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  url:string = "https://alloutapi20181129084115.azurewebsites.net/api/v1/area/";

  constructor(private http : HttpClient) { }

  getAllAreas(){
    return this.http.get<IArea[]>(this.url);
  }
  getAreaById(id : number){
    return this.http.get<IArea>(this.url + id);
  }
  postArea(name : post_IArea){
    return this.http.post<post_IArea>(this.url, name).subscribe(data => {
      console.log("post area subscribe");
      console.log(data);
    });
  }
}

export interface IQuestion {
  questionID: number;
  questionType: number;
  questionText: string;
  points: number;
  isSolved: boolean;
  answer: string;
}

export interface ILocation {
  locationID: number;
  locationName: string;
  latitude: number;
  longitude: number;
  question: IQuestion;
  isBoobyTrapped: boolean;
  victorTeamID: number;
}

export interface IArea {
  areaID: number;
  locations: ILocation[];
  name: string;
}
export interface post_IArea{
  name : string;
}