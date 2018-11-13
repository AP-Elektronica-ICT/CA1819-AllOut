import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlloutProvider, Game, Team } from '../../providers/AlloutAPI/AlloutAPI';

@Component({
    selector: 'page-joingame',
    templateUrl: 'joingame.page.html'
})

export class JoinGamePage {
    games:Game[];
    teamNames:string[];
    gameCode:string;
    teamName:string;
    team:Team;
    game:Game;
    message:string;

    constructor(private _svc:AlloutProvider){
    }

    joinGame(){
        let selGame:Game[];
        let gameID:number;
        
        console.log(this.gameCode)
        /*
            GameCode: X35H0
            TeamName: SlimmeJongens
        */
        try {
            for(let game of this.games){
                console.log(game.gameCode)
                if (game.gameCode == this.gameCode){
                    this.game = game;
                }
            }
            try{
                for(let team of this.game.team){
                    this.teamNames.push(team.teamName)
                }
                if (!this.teamNames.indexOf(this.teamName)){
                    this.team = {
                        teamID: 0,
                        teamName: this.teamName,
                        totalPoints: 0,
                        totalBoobyTraps: 0,            
                    }
                    this.team.teamName = this.teamName;
                    this.game.team.push(this.team);
                    this._svc.putGame(this.game.gameID, this.game);
                    this.message = "Succesfully joined the game!"
                }
                else {
                    this.message = "That name is already taken."
                }
            }catch{
                this.message = "Something went wrong. Try again later."
            }
        }catch{
            this.message = "That game doesn't seem to exist. Check your internet connection and try again.";
        }try{
            for(let game of this.games){
                console.log(game.gameCode)
                if (game.gameCode == this.gameCode){
                    this.game = game;
                }
            }
            this.team = {
                teamID: 0,
                teamName: this.teamName,
                totalPoints: 0,
                totalBoobyTraps: 0,            
            }
            this.team.teamName = this.teamName;
            this.game.team.push(this.team);
            this._svc.putGame(this.game.gameID, this.game);
            this.message = "Succesfully joined the game!"
        }catch{
            this.message = "Something went wrong. Try again later."
        }
    }

    ngOnInit(){
        this._svc.getAllGames().subscribe(result =>{
            console.log(result)
            this.games = result;
        });
    }
}
