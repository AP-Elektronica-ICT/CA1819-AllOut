import { Component, OnInit } from '@angular/core';
import { LocationService, ILocation } from '../services/location.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private locationservice : LocationService, private router : Router) { }

  locationID : number;
  location : ILocation;
  latitude : number;
  longitude : number;
  locationName : string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.locationID = params['id'];
    });
    this.locationservice.getLocationById(this.locationID).subscribe(
      result => {
        this.location = result;
        this.locationName = result.locationName;
        this.latitude = result.latitude;
        this.longitude = result.longitude;
      });
    }
    addQuestion(){
      this.router.navigate(["/newquestion/"+ this.locationID]);
    }
  }