import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { GameService, IGame } from '../services/game.service';
import { AreaService, IArea } from '../services/area.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dashboardUrl = 'http://localhost:4200/dashboard';
  game_data : IGame[] = [];
  areas : IArea[];
  constructor(
    private authService: AuthService,
    private gameService: GameService,
    private areaService: AreaService) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe(
      result => this.game_data = result
    );
    this.areaService.getAllAreas().subscribe(
      result => this.areas = result
    );
  }
}
