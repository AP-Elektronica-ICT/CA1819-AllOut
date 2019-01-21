import { Component, OnInit } from '@angular/core';
import { AreaService, IArea, ILocation } from '../services/area.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './newlocation.component.html',
  styleUrls: ['./newlocation.component.css']
})
export class NewLocationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private areaService : AreaService, 
    private router : Router) { }

  area : IArea;

  areaID : number;
  location : ILocation;
  latitude : number;
  longitude : number;
  locationName : string;

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.areaID = params['id'];
      });
      this.areaService.getAreaById(this.areaID).subscribe(
        result => {
          this.area = result;
        }
      );
    }
    addLocation(){
      var loc : ILocation = {
        locationName: this.locationName,
        latitude: this.latitude,
        longitude: this.longitude
      }
      this.area.locations.push(loc);

      this.areaService.updateArea(this.area).subscribe(
        result => {
          console.log(result);
        }
      );

    }
  }