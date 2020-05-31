import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppointserviceService } from 'src/app/appointservice.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  private test: number;
 
  @Input() showMePartially: boolean;
  constructor(public appointserviceService: AppointserviceService) {
   }
 
  submitted: boolean;
  isButtonVisible = false;
  formControls=this.appointserviceService.form.controls;
  showSucessMsg:boolean;
  appointmentmsg:boolean;
  

  ngOnInit(): void {
    this.appointserviceService.getappointment();
    
  }
  


  onSubmit(){
    
  
    this.submitted=true;
    if(this.appointserviceService.form.valid){
     if(this.appointserviceService.form.get('$key').value==null)
       this.appointserviceService.insertappoint(this.appointserviceService.form.value);
       this.showSucessMsg=true;
       setTimeout(() => this.showSucessMsg = false ,3000);
       this.appointmentmsg=true;
     
     
    this.appointserviceService.random();
    this.submitted=false;
    setTimeout(() => this.appointserviceService.form.reset() ,10000);
     
      
      //  console.log("dd",this.appointserviceService.random())
    this.submitted=false;
  }
  
}

}
