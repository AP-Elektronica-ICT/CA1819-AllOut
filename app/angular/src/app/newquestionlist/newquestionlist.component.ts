import { Component, OnInit } from '@angular/core';
import { AreaService, post_IArea} from '../services/area.service';
@Component({
  selector: 'app-newquestionlist',
  templateUrl: './newquestionlist.component.html',
  styleUrls: ['./newquestionlist.component.css']
})
export class NewquestionlistComponent implements OnInit {

  listName : string;
  constructor(private areaService: AreaService) { }

  ngOnInit() {

  }
  postList(){
    var area : post_IArea = {
      name : this.listName
    }
    this.areaService.postArea(area);
    console.log("postlist");
  }
}
