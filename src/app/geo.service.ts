import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
// import { FirebaseApp } from '@angular/fire';
// import * as GeoFire from "Geofire";
// node_modules\geofire
import { GeoFire } from '../../node_modules/geofire';
import { BehaviorSubject } from 'rxjs';
import { FirebaseApp } from '@angular/fire';


@Injectable({
  providedIn: 'root'
})
export class GeoService {
  dbRef: any;
  geoFire: any;

  hits = new BehaviorSubject([])

  constructor(private db: AngularFireDatabase) {
    
    // this.dbRef = this.db.list('/Hospitals Details');
    // console.log('dbref',this.dbRef);

    // const GeoFire = require('geofire');
    // this.geoFire = new GeoFire(this.dbRef.$ref);
    let d = this.db.database.ref('/Hospitals Details')
    
    this.geoFire = new GeoFire(d);
    
    // let rm = this.geoFire.list('/Hospitals Details').$ref ;
    // console.log('dsfsd', rm);


  }
  setLocation(key: string, coords: Array<number>) {
    this.geoFire.set(key, coords).then(_ => console.log('location updated'))
      .catch(err => console.log(err))
  }

  getLocation(radius: number, coords: Array<number>) {
    // debugger
    // this.geoFire.query.get().then((re)=>{
    //   debugger
    // })
    this.geoFire.GeoQuery({
      center: coords,
      radius: radius
    }).then((sp)=>{
     
    })
    this.geoFire.GeoQuery({
      center: coords,
      radius: radius
    }).on('key_entered', (key, location, distance) => {
      
      let hit = {
        location: location,
        distance: distance
      }
      let currentHits = this.hits.value
      currentHits.push(hit)
      this.hits.next(currentHits)
    });
  }
}
