import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { DateTime } from "ionic-angular";
@Injectable()

export class AlloutProvider {
    url: string;
    game:Game;
    teamName:string;

    constructor(private _http: HttpClient) {
        this.url = "https://alloutapi20181129084115.azurewebsites.net/api/v1/"
    };

    postTeam(team: Team) {
        console.log(this.url + "game/team")
        console.log(JSON.stringify(team))
        return this._http.post(this.url + "game/team", team);
    }

    getLocation(id: number): Observable<Location> {
        return this._http.get<Location>(this.url + "location/" + id);
    }

    getAllLocations(): Observable<Location[]> {
        return this._http.get<Location[]>(this.url + "location/");
    }

    getGame(id: number): Observable<Game> {
        return this._http.get<Game>(this.url + "game/" + id);
    }

    getAllGames(): Observable<Game[]> {
        return this._http.get<Game[]>(this.url + "game/");
    }
    getLocationPoints(id:number): Observable<Location[]>{
        return this._http.get<Location[]>(this.url + "location/" + id);
    }
}

export interface Team {
    teamID: number;
    gameID: number;
    teamName: string;
    totalPoints: number;
    totalBoobyTraps: number;
}

export interface Game {
    gameLogicID: number;
    gameCode: string;
    team: Team[];
    startTime: DateTime,
    stopTime: DateTime;
}

export interface Question {
    questionID: number;
    questionType: number;
    questionText: string;
    points: number;
    isSolved: boolean;
    answer: string;
}

export interface Location {
    locationID: number;
    locationName: string;
    latitude: number;
    longitude: number;
    question: Question;
    isBoobyTrapped: boolean;
    victorTeamID: number;
}