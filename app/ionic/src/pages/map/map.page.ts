import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { HomePage } from '../../pages/home/home.page';
import * as API from '../../providers/AlloutAPI/AlloutAPI';
import { QuestionPage } from '../question/question';
import * as $ from 'jquery';

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
    constructor(public navCtrl: NavController, public API: API.AlloutProvider, public geolocation: Geolocation, public locationTrackerProvider: LocationTrackerProvider, private toastCtrl: ToastController) {
    }

    map: any;
    playerPos: any;
    userPos: { lat: any, lng: any };
    deltaLat;
    deltaLng;
    numDeltas = 100;
    delay = 10; //milliseconds
    i = 0;
    locations: API.Location[];
    APIcopy: API.AlloutProvider
    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');
        this.APIcopy = this.API;
        this.loadMap();
        this.locationTrackerProvider.startTracking();
    }

    getLocations() {
        console.log("get them all!");
        this.API = this.APIcopy;
        this.API.getAllLocations().subscribe(result => {
            this.locations = result;
            console.log(this.locations);
            try {
                for (let loc of this.locations) {
                    let mark = $("div[title|='" + loc.locationName + "'").remove();
                    mark.remove();
                    if (loc.victorTeamID == -1 || loc.isBoobyTrapped) {

                        let ll = { lat: loc.latitude, lng: loc.longitude };
                        let icon = {
                            size: new google.maps.Size(100, 100),
                            origin: new google.maps.Point(0, 0),
                            scaledSize: new google.maps.Size(30.0, 30.0),
                            anchor: new google.maps.Point(0, 0),
                            url: "../../assets/icon/newMarker.png"
                        }
                        let marker = new google.maps.Marker({
                            position: ll,
                            map: this.map,
                            label: loc.question.points.toString(),
                            title: loc.locationName,
                            icon: icon
                        });
                        console.log("CalcDistance(): " + this.calcDistance(ll.lat, ll.lng));
                        try {
                            console.log("API3: " + this.API);
                            marker.addListener('click', event => {
                                var distance = this.calcDistance(ll.lat, ll.lng);
                                console.log("distance binnen clicker: " + distance);
                                if (distance <= 1000) {
                                    console.log(loc);
                                    this.navCtrl.push(QuestionPage, {
                                        data: loc
                                    });
                                }
                                else {
                                    var m = "You are currently " + Math.round(distance) + " meters from this point. You need to be within 100 meters!";
                                    this.showToast(m);
                                }
                            })

                        console.log("API2: " + this.API);
                        } catch (err) {
                            console.log("marker.addListener(): " + err)
                        }
                    }

                }

            } catch (err) {
                console.log("getLocations(): " + err);
            }
            setTimeout(() => this.getLocations(), 5000);
        });
    }
    /*
    markerClick(lLat: any, lLong: any, loc: any) {
        console.log(this.userPos);
        var distance = this.calcDistance(this.userPos.lat, this.userPos.lng);
        if (distance <= 100) {
            this.navCtrl.push(QuestionPage, {
                data: loc
            });
        }
        else {
            var m = "You are currently " + distance + "meters from this point. You need to be within 100 meters!";
            this.showToast(m);
        }
    }*/

    quitGame() {
        //quit game code here!
        console.log("QUIT GAME");
        this.navCtrl.pop();
    }

    showToast(m: any) {
        let toast = this.toastCtrl.create({
            message: m,
            duration: 5000,
            position: 'top'
        });
        toast.present;
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
    calcDistance(lat2: any, lon2: any) {
        var R = 6371e3; // metres
        var lat1 = this.userPos.lat;
        var φ1 = lat1 * Math.PI / 180;
        var φ2 = lat2 * Math.PI / 180;
        var Δφ = (lat2 - this.userPos.lat) * ((Math.PI) / 180);

        var Δλ = (lon2 - this.userPos.lng) * ((Math.PI) / 180);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        console.log(d);
        console.log("API4: " + this.API);
        return d;
    }
    updatePlayerMarker() {
        let watchOptions = {
            enableHighAccuracy: true
        };

        console.log("API4: " + this.API);
        this.geolocation.watchPosition(watchOptions).subscribe((position) => {
            //check distance between new coordinate and this.playerPos
            //if distance greater than 30 meters
            if (!this.playerPos) {
                this.userPos = { lat: position.coords.latitude, lng: position.coords.longitude };
                let icon = {
                    size: new google.maps.Size(100, 100),
                    origin: new google.maps.Point(0, 0),
                    scaledSize: new google.maps.Size(30.0, 30.0),
                    anchor: new google.maps.Point(0, 0),
                    url: "../../assets/icon/userMarker.png"
                }
                this.playerPos = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.Drop,
                    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    icon: icon
                });
                console.log("USERPOS: " + this.userPos);
            } else {
                this.transition([position.coords.latitude, position.coords.longitude]);
                //this.playerPos.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            }
            if (this.API.game) {
                this.getLocations();
                console.log("API5: " + this.API);
            }
            else {
                var m = "You are not currently in a game, the map will be empty except for you.";
                this.showToast(m);
                console.log(m);
                console.log("API6: " + this.API);
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
            console.log("API7: " + this.API);
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
