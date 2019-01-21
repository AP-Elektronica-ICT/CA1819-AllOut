import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  url: string = "http://localhost:33324/api/v1/area/";
  //url:string = "https://alloutapi20181206110549.azurewebsites.net/api/v1/area/";

  constructor(private http : HttpClient) { }

  getAllAreas(){
    return this.http.get<IArea[]>(this.url);
  }
  getAreaById(id : number){
    return this.http.get<IArea>(this.url + id);
  }
  updateArea(area : IArea){
    return this.http.put<ILocation>(this.url, area);
  }
  postArea(name : IArea){
    return this.http.post<IArea>(this.url, name);
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

export interface ILocation {
  locationID?: number;
  locationName: string;
  latitude: number;
  longitude: number;
  question?: IQuestion;
  isBoobyTrapped?: boolean;
  victorTeamID?: number;
}

export interface IArea {
  areaID?: number;
  locations ?: ILocation[];
  name: string;
}