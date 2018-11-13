import { Component, OnInit } from '@angular/core';
import { GameService, IGame, IPostGame } from '../services/game.service';
import { LocationService, ILocation, IQuestion } from '../services/location.service';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css']
})
export class NewgameComponent implements OnInit {

  gameCodes = [];
  locations : ILocation[];
  generatedHash : string;
  possibleTimes = ['120:00','60:00','30:00'];
  submitted = false;
  gameCode : string;
  gameDuration : string;
  gameBoobytraps : number;

  constructor(
    private gameService: GameService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe(
      result => this.gameCodes = this.MapGameCodes(result)
    );
    this.generateHash();
    this.locationService.getAllLocations().subscribe(
      result => this.MapLocations(result),
      // The 2nd callback handles errors.
      (err) => console.error(err),
      () => console.log(this.locations)
    );
    
    
  }
  MapGameCodes(result : IGame[]){
    for(var i = 0; i < result.length; i++){
      this.gameCodes.push(result[i].gameCode);
    }
    return this.gameCodes;
  }
  MapLocations(result : ILocation[]){
    this.locations = result;
  }
  generateHash() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var exists = false;
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    for(var j = 0; j < this.gameCodes.length; j++){
      if(text == this.gameCodes[j])
        exists = true;
    }
    if(!exists){
      this.gameCode = text;
    } else{
      this.generateHash();
    }
    console.log("HASH Generated:");
    console.log(this.generatedHash);
      
  }
  postGame(game){
    event.preventDefault();
    var newGame : IPostGame = {
      duration : game.value.duration,
      boobytraps : game.value.amountboobytraps
    }
    console.log(newGame);
    this.gameService.postGame(newGame);
  }
}

