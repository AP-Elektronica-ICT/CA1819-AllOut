import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { GameService, IGame } from '../services/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dashboardUrl = 'http://localhost:4200/dashboard';
  game_data : IGame[] = [];
  constructor(
    private authService: AuthService,
    private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe(
      result => this.game_data = this.MapGames(result)
    );
  }
  private MapGames(result : IGame[]) : IGame[]{
    console.log("game");
    for(var i = 0; i < result.length; i++){
      var game : IGame = {
        gameID : result[i].gameID,
        gameCode : result[i].gameCode,
        team : result[i].team
      }
      
      this.game_data.push(game);
    }
    return this.game_data;
  }
  debuggingTest(){
    console.log(this.game_data);
  }
}
