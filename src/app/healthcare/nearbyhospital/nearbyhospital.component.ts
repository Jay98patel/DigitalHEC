import { Component, OnInit } from '@angular/core';
import {GeoService } from 'src/app/geo.service';
import { Input} from '@angular/core';

@Component({
  selector: 'app-nearbyhospital',
  templateUrl: './nearbyhospital.component.html',
  styleUrls: ['./nearbyhospital.component.scss']
})
export class NearbyhospitalComponent implements OnInit {
  @Input() showMePartially1: boolean;
lat:number;
long:number;
markers: any;
  constructor( private geo : GeoService) { }

  ngOnInit(): void {
    this.getUserLocation();
    this.geo.hits.subscribe((hits) =>{
      
      this.markers = hits
    })
  }
 private getUserLocation(){
  
   if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position => {
       
       this.lat=position.coords.latitude;
       this.long=position.coords.longitude;
       this.geo.getLocation(500, [this.lat, this.long])
     });
   }
 }
}
