import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http : HttpClient) { }
  url:string = "https://alloutapi20181206110549.azurewebsites.net/api/v1/game/";
  getAllGames(){
    return this.http.get<IGame[]>(this.url);
  }
  putGame(game:IGame){
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    console.log(game);
    return this.http.put(this.url, JSON.stringify(game), {headers: headers});
  }
  getGameById(id : number){
    return this.http.get<IGame>(this.url + id);
  }
  postGame(game : IPostGame){
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this.http.post(this.url, game, { headers : headers });
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
  hasStarted: boolean;
  startingTraps: number;
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
