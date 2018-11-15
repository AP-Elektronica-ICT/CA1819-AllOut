import { Component, OnInit } from '@angular/core';
import { GameService, IGame, IPostGame } from '../services/game.service';
import { LocationService, ILocation, IQuestion } from '../services/location.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css']
})
export class NewgameComponent implements OnInit {

  locations : ILocation[];
  gameCode : string;
  amountBoobytraps : number;
  startDate : Date;
  endDate : Date;

  constructor(
    private gameService: GameService,
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.gameService.getAllGames().subscribe(
    //  result => this.gameCodes = this.MapGameCodes(result)
    //);
    //this.generateHash();
    //this.locationService.getAllLocations().subscribe(
    //  result => this.MapLocations(result),
      // The 2nd callback handles errors.
    //  (err) => console.error(err),
    //  () => console.log(this.locations)
    //);
  }
  //MapLocations(result : ILocation[]){
  //  this.locations = result;
  //}
  postGame(game){
    console.log();
    //game.value.amountboobytraps
    //game.value.startdate
    //game.value.starttime
    //game.value.enddate
    //game.value.endtime
    var curDate = new Date();
    var newGame : IPostGame = {
      team: null,
      startTime: curDate,
      stopTime: curDate
    }
    this.gameService.postGame(newGame);
    this.router.navigate(['/dashboard']);
  }
}

