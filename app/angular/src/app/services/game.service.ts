import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http : HttpClient) { }

  getAllGames(){
    return this.http.get<IGame[]>("https://localhost:44359/api/v1/game");
  }
  getGameById(id : number){
    return this.http.get<IGame>("https://localhost:44359/api/v1/game/"+ id);
  }
  postGame(game : IPostGame){
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this.http.post("https://localhost:44359/api/v1/game", game, { headers : headers }).subscribe(data => {
      console.log("post game subscribe");
      console.log(data);
    });
  }
  deleteGame(id : number){
    return this.http.delete("https://localhost:44359/api/v1/game"+id);
  }

}
export interface IGame{
  gameID: number;
  gameCode: string;
  team: ITeam[];
}
export interface ITeam{
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
