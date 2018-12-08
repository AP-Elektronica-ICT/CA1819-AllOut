import { Component, OnInit } from '@angular/core';
import { LocationService, ILocation } from '../services/location.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './newlocation.component.html',
  styleUrls: ['./newlocation.component.css']
})
export class NewLocationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private locationservice : LocationService, private router : Router) { }

  areaID : number;
  location : ILocation;
  latitude : number;
  longitude : number;
  locationName : string;

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.areaID = params['id'];
      });
    }
    addLocation(){
      var loc : ILocation = {
        locationName: this.locationName,
        latitude: this.latitude,
        longitude: this.longitude
      }
      this.locationservice.postLocation(loc).subscribe(
        result => {
          console.log(result);
        }
      );

    }
  }