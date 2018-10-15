import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController} from 'ionic-angular';

declare var google; 
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef; 
  map: any; 

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.loadMap(); 
  }

  loadMap(){
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng, 
      zoom: 15, 
      mapTypeId: 'roadmap'
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
  }

}
