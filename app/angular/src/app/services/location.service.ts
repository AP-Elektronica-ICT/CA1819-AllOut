import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }
  getAllLocations(){
    return this.http.get<ILocation[]>("https://localhost:44359/api/v1/location");
  }
  getLocation(id : number){
    return this.http.get<ILocation>("https://localhost:44359/api/v1/location/"+ id);
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
