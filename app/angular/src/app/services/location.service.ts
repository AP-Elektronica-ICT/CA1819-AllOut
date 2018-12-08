import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url:string = "https://alloutapi20181206110549.azurewebsites.net/api/v1/location/";

  constructor(private http : HttpClient) { }

  getAllLocations(){
    return this.http.get<ILocation[]>(this.url);
  }
  getLocationById(id : number){
    return this.http.get<ILocation>(this.url + id);
  }
  postLocation(name : ILocation){
    return this.http.post<ILocation>(this.url, name);
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
  locationID?: number;
  locationName: string;
  latitude: number;
  longitude: number;
  question?: IQuestion;
  isBoobyTrapped?: boolean;
  victorTeamID?: number;
}
