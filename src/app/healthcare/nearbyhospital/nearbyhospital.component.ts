import { AfterViewInit,Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Input } from '@angular/core';

import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import 'rxjs/add/operator/map';

const firebaseConfig = {
  apiKey: "AIzaSyDVwgHOk7sJsnf--Jn0C6dxMtQALqOTDk0",
  authDomain: "digitalhec-fc40e.firebaseapp.com",
  databaseURL: "https://digitalhec-fc40e.firebaseio.com",
  projectId: "digitalhec-fc40e",
  storageBucket: "digitalhec-fc40e.appspot.com",
  messagingSenderId: "569737326095",
  appId: "1:569737326095:web:c7af01655cad7d43d47d7a",
  measurementId: "G-50Z5DBWDKE"
};
    firebase.initializeApp(firebaseConfig);


@Component({
  selector: 'app-nearbyhospital',
  templateUrl: './nearbyhospital.component.html',
  styleUrls: ['./nearbyhospital.component.scss']
})

export class NearbyhospitalComponent implements OnInit {
  @Input() showMePartially1: boolean;



  constructor(  ) { 
    
    
    // Initialize Firebase
    
    
  }
 
  ngAfterViewInit(){
    this.initialize();
  }
  

  ngOnInit(): void {
    
  }

  
  
   initialize() {


    
    var infowindow = new google.maps.InfoWindow();
    var centerloca= navigator.geolocation.getCurrentPosition(function(position) {
      // Center on user's current location if geolocation prompt allowed
      var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var latc=position.coords.latitude;
        var longc=position.coords.longitude
    });
    var map = new google.maps.Map(
      
        document.getElementById("map"));
        navigator.geolocation.getCurrentPosition(function(position) {
          // Center on user's current location if geolocation prompt allowed
          var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          map.setCenter(initialLocation);
          map.setZoom(13);
        });
        // , {
          
        //     center: new google.maps.LatLng(20.5937, 78.9629),
        //     zoom: 4.5,
           
        // });
    // Initialize Firebase lat: position.coords.latitude,
          // lng: position.coords.longitude
          if (navigator.geolocation) {
            var icon="assets/img/rsz_map.png"
            navigator.geolocation.getCurrentPosition(function(position) {
          var marker1 = new google.maps.Marker({
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            
            map: map,
            
            animation: google.maps.Animation.DROP,
           icon:icon,
           title:'Hello User You Are Here'
        });
      });
    }
    
    

    //Create a node at firebase location to add locations as child keys
    var firebase = require('firebase/app');
    require('firebase/auth');
    require('firebase/database');
    var locationsRef = firebase.database().ref("Hospitals Details/");
    console.log("sc ", locationsRef)
    var bounds = new google.maps.LatLngBounds();
    var markerImage = 'ic.png';
    locationsRef.on('child_added', function(snapshot) {
        var data = snapshot.val();
icon="assets/img/rsz_clinic-icon-66.png"
        console.log(data);
        var marker = new google.maps.Marker({
            position: {
                lat: parseFloat(data.lat),
                lng: parseFloat(data.long),

            },

            animation: google.maps.Animation.DROP,
            map: map,
           icon:icon
           
        });
        bounds.extend(marker.getPosition());


        
        marker.addListener('click', (function(data) {
            return function(e) {
                

                infowindow.open(map, this);
               var long=this.position.lat()
               var lat=this.position.lng();
                console.log("jay",long+"jay",lat) 
                var showPosition = function (position) {
                  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                 var long1=position.coords.longitude;
                 var lat1=position.coords.latitude;
                 console.log("data long",long+"data lat",lat)
                 console.log("long curernt",long1+"lat current",lat1)
                 var p1=new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                 var p2=new google.maps.LatLng(long,lat);
                 var distance =( google.maps.geometry.spherical.computeDistanceBetween(p1,p2)/1000).toFixed(2); 
                 console.log("diatance in km",distance);
                 infowindow.setContent("<b><center> " + data.dname + "</center></b>" + "<br> Address: " + data.Speciality + "<br>" + "</br>"+ data.time +"<br>"+"</br>"+ "<b> You are " + distance + " KM from " +data.dname +" hospital </b>");
                 
                //  var center = bounds.getCenter();
                //  var pt = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                //  map.setCenter(pt);
                //  map.setZoom(13);
                //  map.fitBounds(bounds);
                 
                }
              navigator.geolocation.getCurrentPosition(showPosition);

                             
           
              }
        }(data)));

      
      
            // lati = place.geometry.location.lat();
            //     longi = place.geometry.location.lng();
       // map.fitBounds(bounds);
    });


}


  }

