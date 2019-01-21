import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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

    constructor(private api:AlloutProvider, private navCtrl: NavController, private toastCtrl: ToastController){
    }

    ngOnInit(){
        this.api.getAllGames().subscribe(result =>{
            console.log(result)
            this.games = result;
        });
    }

    showToast(m: any) {
        let toast = this.toastCtrl.create({
            message: m,
            duration: 5000,
            position: 'top'
        });
        toast.present;
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
                console.log("Game found...")
            }
        }
        for(let team of this.game.team){
            console.log(team.teamName)
            if (team.teamName == this.teamName){
                this.nameTaken = true;
                var m = "That name is already taken!";
                console.log(m);
                this.showToast(m);
            }
        }
        if (!this.nameTaken){
            this.team.gameID = this.game.gameLogicID;
            this.team.teamName = this.teamName;
            this.team.totalBoobyTraps = 2;
            this.team.totalPoints = 0;
            this.api.postTeam(this.team).subscribe(result =>{
                console.log(result);
            });
            this.api.teamName = this.teamName;
            var m = "Succesfully joined the game!";
            console.log(m);
            this.showToast(m);
            this.navCtrl.push(MapPage);
        }
    }
}
