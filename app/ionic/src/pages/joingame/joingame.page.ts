import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlloutProvider, Game, Team } from '../../providers/AlloutAPI/AlloutAPI';
import { MapPage } from '../map/map.page';

@Component({
    selector: 'page-joingame',
    templateUrl: 'joingame.page.html'
})
 
export class JoinGamePage {
    games:Game[];
    gameCode:string;
    teamName:string;
    team:Team = {
        teamID: 0,
        gameID: 0,
        teamName: "",
        totalBoobyTraps: 0,
        totalPoints: 0
    };
    game:Game;
    message:string;
    nameTaken:boolean;

    constructor(private api:AlloutProvider, private navCtrl: NavController){
    }

    joinGame(){
        let selGame:Game[];
        let gameID:number;
        /*
            GameCode: X35H0
            TeamName: SlimmeJongens
        */
        for(let game of this.games){
            console.log(game.gameCode)
            if (game.gameCode == this.gameCode){
                this.game = game;
                this.api.game = game;
            }
        }
        for(let team of this.game.team){
            if (team.teamName == this.teamName){
                this.nameTaken = true;
            }
        }
        if (this.nameTaken)
            this.message = "That name is already taken."
        else {
            this.team.gameID = this.game.gameLogicID;
            this.team.teamName = this.teamName;
            this.team.totalBoobyTraps = 2;
            this.team.totalPoints = 0;
            this.api.postTeam(this.team).subscribe(result =>{
                console.log(result);
            });
            
            this.api.teamName = this.teamName;
            this.message = "Succesfully joined the game!"
            this.navCtrl.push(MapPage);
        }
    }

    ngOnInit(){
        this.api.getAllGames().subscribe(result =>{
            console.log(result)
            this.games = result;
        });
    }
}
