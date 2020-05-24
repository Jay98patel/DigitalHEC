import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthhomeComponent } from './healthhome/healthhome.component';
import { HealthcareRoutingModule } from './healthcare-routing.module';
import { HealthcareComponent } from './healthcare.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NearbyhospitalComponent } from './nearbyhospital/nearbyhospital.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire'
export const firebaseConfig =environment.firebaseConfig;
import { AgmCoreModule } from '@agm/core'


@NgModule({
  declarations: [HealthhomeComponent, HealthcareComponent, AppointmentComponent, NearbyhospitalComponent],
  imports: [
    CommonModule,
    HealthcareRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  bootstrap: [HealthcareComponent]  
})
export class HealthcareModule { }
