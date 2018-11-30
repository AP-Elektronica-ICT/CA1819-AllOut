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
      result => this.MapGames(result)
    );
  }
  private MapGames(result : IGame[]){
      this.game_data = result;
      this.debuggingTest();
  }
  debuggingTest(){
    console.log(this.game_data);
  }
  startGame(id:number){
    console.log("Index given: " + id)
    let gameUpdate:IGame;
    for (let i of this.game_data){
      if (i.gameLogicID == id){
        console.log(i.gameLogicID + " = " + id)
        gameUpdate = i;
        gameUpdate.startTime = Date.now().toString();
        gameUpdate.hasStarted = true;
      }
    }
    this.gameService.putGame(gameUpdate).subscribe(result =>{
      console.log(result);
    });
  }
}
