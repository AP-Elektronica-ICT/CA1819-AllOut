import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { DateTime } from "ionic-angular";
@Injectable()

export class AlloutProvider {
    url: string;
    constructor(private _http: HttpClient) {
        this.url = "http://localhost:33324/api/v1/"
    };

    putGame(id: number, game: Game) {
        return this._http.put(this.url + "game/" + id, game);
    }

    postLocation(id: number, location: Location): Observable<Location> {
        return this._http.post<Location>(this.url + "location/" + id, location);
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
}

export interface Team {
    teamID: number;
    teamName: string;
    totalPoints: number;
    totalBoobyTraps: number;
}

export interface Game {
    gameID: number;
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