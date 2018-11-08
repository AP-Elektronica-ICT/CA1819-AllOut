import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlloutProvider } from '../../providers/AlloutAPI/AlloutAPI';

@Component({
    selector: 'page-joingame',
    templateUrl: 'joingame.page.html'
})

export class JoinGamePage {
    constructor(private _svc:AlloutProvider){
    }
    
    ngOnInit(){
        this._svc.get
    }
}
