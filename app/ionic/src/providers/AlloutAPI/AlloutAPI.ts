import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { DateTime } from "ionic-angular";
@Injectable()

export class AlloutProvider {
    url: string;
    game:Game;
    teamName:string;
    headers = {
        headers:{
            'If-Modified-Since':'Mon, 26 Jul 1997 05:00:00 GMT',
            'content-type':'application/json',
            'cache-control':'no-cache',
            'pragma':'no-cache'
        }
    }
    constructor(private _http: HttpClient) {
        this.url = "http://localhost:33324/api/v1/"
    };

    postTeam(team: Team) {
        console.log(this.url + "game/team")
        console.log(JSON.stringify(team))
        return this._http.post(this.url + "game/team", team);
    }

    getLocation(id: number): Observable<Location> {
        return this._http.get<Location>(this.url + "location/" + id, this.headers);
    }

    getAllLocations(): Observable<Location[]> {
        return this._http.get<Location[]>(this.url + "location/", this.headers);
    }

    getGame(id: number): Observable<Game> {
        return this._http.get<Game>(this.url + "game/" + id, this.headers);
    }

    getAllGames(): Observable<Game[]> {
        return this._http.get<Game[]>(this.url + "game/", this.headers);
    }

    getLocationPoints(id:number): Observable<Location[]>{
        return this._http.get<Location[]>(this.url + "location/" + id, this.headers);
    }
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

export interface Area {
    areaID: number;
    locations: Location[];
    name: string;
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
    startTime: string;
    stopTime: string;
    hasStarted: boolean;
    startingTraps: number;
}

export interface Question {
    questionID: number;
    questionType: number;
    questionText: string;
    points: number;
    isSolved: boolean;
    answer: string;
}