import { Component, OnInit } from '@angular/core';
import { AreaService, IArea} from '../services/area.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newquestionlist',
  templateUrl: './newquestionlist.component.html',
  styleUrls: ['./newquestionlist.component.css']
})
export class NewquestionlistComponent implements OnInit {

  listName : string;
  constructor(private areaService: AreaService, private router : Router) { }

  ngOnInit() {

  }
  postList(){
    var area : IArea = {
      name : this.listName
    }
    this.areaService.postArea(area).subscribe();
    console.log("postlist");
    this.router.navigate(["/dashboard"]);
  }
}
