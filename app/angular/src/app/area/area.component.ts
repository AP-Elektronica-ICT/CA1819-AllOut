import { Component, OnInit } from '@angular/core';
import { AreaService, ILocation, IArea } from '../services/area.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private areaService : AreaService) { }

  listName : string;
  areaID : number;
  _this : any;
  locations : ILocation[];
  area : IArea;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.areaID = params['id'];
    });
    this.areaService.getAreaById(this.areaID).subscribe(
      result => {
        this.area = result;
        this.locations = result.locations;
        this.listName = this.area.name;
      });
    
  }

}
