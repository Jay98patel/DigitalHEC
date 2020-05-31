import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class AppointserviceService {

  constructor(private firebase: AngularFireDatabase) { }
  appointlist:AngularFireList<any>;
  appointlist1:AngularFireList<any>;
  appointlist2:AngularFireList<any>;
   form =new FormGroup({
     $key:new FormControl(null),
     name:new FormControl('',Validators.required),
     phnnum:new FormControl('',[Validators.minLength(10),Validators.maxLength(10),Validators.required]),
     dname:new FormControl('',Validators.required),
     hname:new FormControl('',Validators.required),
     diseases:new FormControl('',Validators.required),
     date:new FormControl('',Validators.required),
     random:new FormControl(Math.floor(Math.random()*100))
     
   });
   
   random(){
    return this.form.controls['random'].value
    
   }
  
  
   getCamps(){
     this.appointlist2=this.firebase.list('users/Camps Database');
     return this.appointlist2.snapshotChanges();
   }
   getDoctor(){
    this.appointlist1=this.firebase.list('Doctors Details');
    return this.appointlist1.snapshotChanges();
  }
  getappointment(){
    
    this.appointlist=this.firebase.list('Appointments');
    return this.appointlist.snapshotChanges();
  }
   insertappoint(patient)
    {
    this.appointlist.push({
      name:patient.name,
      phnnum:patient.phnnum,
      drname:patient.dname,
      hname:patient.hname,
      diseases:patient.diseases,
      date:patient.date,
      rn:patient.random
    });
    }
}
