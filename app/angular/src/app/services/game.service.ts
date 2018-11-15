import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http : HttpClient) { }
  url:string = "http://localhost:33324/api/v1/game";
  getAllGames(){
    return this.http.get<IGame[]>(this.url);
  }
  getGameById(id : number){
    return this.http.get<IGame>(this.url + id);
  }
  postGame(game : IPostGame){
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this.http.post(this.url, game, { headers : headers }).subscribe(data => {
      console.log("post game subscribe");
      console.log(data);
    });
  }
  deleteGame(id : number){
    return this.http.delete(this.url + id);
  }

}
export interface IGame {
  gameLogicID: number;
  gameCode: string;
  team: ITeam[];
  startTime: string;
  stopTime: string;
}

export interface ITeam {
  teamID: number;
  teamName: string;
  totalPoints: number;
  totalBoobyTraps: number;
}
export interface IPostTeam{
  teamName: string;
  totalPoints: number;
  totalBoobyTraps: number;
}
export interface IPostGame{
  team: IPostTeam[],
  startTime: Date,
  stopTime: Date
}
