import { Component, OnInit } from '@angular/core';
import { GameService, IGame, post_IGame } from '../services/game.service';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css']
})
export class NewgameComponent implements OnInit {

  gameCodes = [];
  generatedHash : string;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe(
      result => this.gameCodes = this.MapGameCodes(result)
    );
    this.generateHash();
  }
  MapGameCodes(result : IGame[]){
    for(var i = 0; i < result.length; i++){
      this.gameCodes.push(result[i].gameCode);
    }
    return this.gameCodes;
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
