import { Component, OnInit } from '@angular/core';
import { GameService, IGame, IPostGame } from '../services/game.service';
import { AreaService, IArea } from '../services/area.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css']
})
export class NewgameComponent implements OnInit {

  areas : IArea[];
  gameCode : string;
  amountBoobytraps : number;
  startDate : Date;
  endDate : Date;
  region : string;
  
  constructor(
    private gameService: GameService,
    private areaService: AreaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.areaService.getAllAreas().subscribe(
      result => this.areas = result
    );
  }
  postGame(){
    var curDate = new Date();
    var newGame : IPostGame = {
      team: null,
      startTime: this.startDate,
      stopTime: this.endDate
    }
    this.gameService.postGame(newGame);
    this.router.navigate(['/dashboard']);
  }
  fillEndDate(date : Date){
    this.endDate = new Date(date.toString());
    this.endDate = date;
    this.endDate.setHours(this.endDate.getHours() + 2);
  }
}

