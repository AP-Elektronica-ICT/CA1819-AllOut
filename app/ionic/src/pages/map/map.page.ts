import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { HomePage } from '../../pages/home/home.page';  
import * as API from '../../providers/AlloutAPI/AlloutAPI';
import { QuestionPage } from '../question/question';

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
    constructor(public navCtrl: NavController, public API:API.AlloutProvider, public geolocation: Geolocation, public locationTrackerProvider: LocationTrackerProvider, private toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');
        this.loadMap();
        this.locationTrackerProvider.startTracking();
        this.getLocations(); 
    }

    getLocations(){
        console.log("get them all!"); 
        this.API.getAllLocations().subscribe(result =>{
            this.locations = result;
            console.log(this.locations); 
            try {
                for (let loc of this.locations){
                    console.log(loc.question.points); 
                    let ll = {lat:loc.latitude, lng:loc.longitude};
                    let marker = new google.maps.Marker({
                        position: ll, 
                        map: this.map, 
                        label: loc.question.points.toString(), 
                        title: loc.locationName, 
                        icon: "../../assets/icon/newMarker.png"
                    });
                    console.log(this.calcDistance(this.playerPos.latitude, marker.latitude, this.playerPos.longitude, marker.longitude));
                    marker.addListener('click', function(){
                        var distance = this.calcDistance(marker.latitude, this.userPos.latitude, marker.longitude, this.userPos.longitude); 
                        if(distance <= 100){
                            this.navCtrl.push(QuestionPage, {
                                data: loc.locationID
                            }); 
                        }
                        else{
                            var m = "You are currently " + distance + "meters from this point. You need to be within 100 meters!"; 
                            this.showToast(m); 
                        }
                    })
                }
                
            } catch{
                console.log("Can't add markers!"); 
            }
        });
    }
    showToast(m: any){
        let toast = this.toastCtrl.create({
            message: m, 
            duration: 5000, 
            position: 'top'
        }); 
        toast.present; 
    }

    addLocationMarkers(){
        try{
            for (let loc of this.locations){
                let ll = {lat:loc.latitude, lng:loc.longitude};
                let marker = new google.maps.Marker({position: ll, map: this.map, title: loc.locationName});
            }
        }catch{
            console.log("Can't add markers.")
        }
    }
    
    quitGame(){
        //quit game code here!
        console.log("QUIT GAME"); 
        this.navCtrl.pop(); 
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
        }, (err) => {
            console.log(err);
        });
    }
    calcDistance(lat1: any, lat2: any, lon1: any, lon2: any){
        var R = 6371e3; // metres
        var φ1 = lat1.toRadians();
        var φ2 = lat2.toRadians();
        var Δφ = (lat2-lat1) * ((Math.PI)/180); 

        var Δλ = (lon2-lon1) * ((Math.PI)/180);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var d = R * c;
        return d; 
    }
    updatePlayerMarker() {
        let watchOptions = {
            enableHighAccuracy: true
        };

        this.geolocation.watchPosition(watchOptions).subscribe((position) => {
            //check distance between new coordinate and this.playerPos
            //if distance greater than 30 meters
            if (!this.playerPos) {
                this.userPos = { lat: position.coords.latitude, lng: position.coords.longitude };
                this.playerPos = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.Drop,
                    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
                    icon: "../../assets/icon/newMarker.png"
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
            console.log(this.userPos); 
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
