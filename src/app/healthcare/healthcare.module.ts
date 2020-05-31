import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthhomeComponent } from './healthhome/healthhome.component';
import { HealthcareRoutingModule } from './healthcare-routing.module';
import { HealthcareComponent } from './healthcare.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NearbyhospitalComponent } from './nearbyhospital/nearbyhospital.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppointserviceService } from '../appointservice.service';
import { CampshealthComponent } from './campshealth/campshealth.component';
import { SpecialistComponent } from './specialist/specialist.component'


@NgModule({
  declarations: [HealthhomeComponent, HealthcareComponent, AppointmentComponent, NearbyhospitalComponent, CampshealthComponent, SpecialistComponent],
  imports: [
    CommonModule,
    HealthcareRoutingModule,  
    ReactiveFormsModule,
    FormsModule,
   
    
   
  ],
  providers:[AppointserviceService],
  
  bootstrap: [HealthcareComponent]  
})
export class HealthcareModule { }
