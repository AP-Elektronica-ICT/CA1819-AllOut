import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import * as API from '../../providers/AlloutAPI/AlloutAPI';

declare var google;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-map',
    templateUrl: 'map.page.html',
})
export class MapPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    playerPos: any;
    userPos: { lat: number, lng: number };
    deltaLat;
    deltaLng;
    numDeltas = 100;
    delay = 10; //milliseconds
    i = 0;
    locations:API.Location[];
    constructor(public navCtrl: NavController, public API:API.AlloutProvider, public geolocation: Geolocation, public locationTrackerProvider: LocationTrackerProvider) {
    }

    ngOnInit(){
        this.API.getAllLocations().subscribe(result =>{
            this.locations = result;
        });
    }

    addLocationMarkers(){
        try{
            for (let loc of this.locations){
                let ll = {lat:loc.latitude, lng:loc.longitude};
                let marker = new google.maps.Marker({position: ll, map: this.map, title: loc.locationName});
        }catch{
            console.log("Can't add markers.")
        }
        
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');
        this.loadMap();
        this.locationTrackerProvider.startTracking();
    }

    loadMap() {
        this.geolocation.getCurrentPosition().then((position) => {

            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: 'roadmap',
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false
            }
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.updatePlayerMarker();
            this.addLocationMarkers();
        }, (err) => {
            console.log(err);
        });
    }
    updatePlayerMarker() {
        let watchOptions = {
            frequency: 1000,
            timeout: 3000,
            enableHighAccuracy: false
        };

        this.geolocation.watchPosition().subscribe((position) => {
            //check distance between new coordinate and this.playerPos
            //if distance greater than 30 meters
            if (!this.playerPos) {
                this.userPos = { lat: position.coords.latitude, lng: position.coords.longitude };
                this.playerPos = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.Drop,
                    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                });
            } else {
                this.transition([position.coords.latitude, position.coords.longitude]);
                //this.playerPos.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            }
        }, (error) => {
            console.log('Error getting location', error);
        });
    }
    transition(result) {
        this.i = 0;
        this.deltaLat = (result[0] - this.userPos.lat) / this.numDeltas;
        this.deltaLng = (result[1] - this.userPos.lng) / this.numDeltas;
        this.moveMarker();
    }
    moveMarker() {
        if (this.userPos) {
            this.userPos.lat += this.deltaLat;
            this.userPos.lng += this.deltaLng;
            var latlng = new google.maps.LatLng(this.userPos.lat, this.userPos.lng);
            if (this.playerPos) {
                this.playerPos.setPosition(latlng);
                if (this.i != this.numDeltas) {
                    this.i++;
                    setTimeout(this.moveMarker, this.delay);
                }
            }
        }
    }
}
