import { Component, OnInit } from '@angular/core';
import { GameService, IGame, post_IGame } from '../services/game.service';
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

  constructor(
    private gameService: GameService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe(
      result => this.gameCodes = this.MapGameCodes(result)
    );
    this.locationService.getAllLocations().subscribe(
      result => this.MapLocations(result),
      // The 2nd callback handles errors.
      (err) => console.error(err),
      () => console.log(this.locations)
    );
    
    this.generateHash();
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
      this.generatedHash = text;
    } else{
      this.generateHash();
    }
      
  }
  postGame(data){
    event.preventDefault();
    console.log(data);
    console.log("werkt");
  }
}
