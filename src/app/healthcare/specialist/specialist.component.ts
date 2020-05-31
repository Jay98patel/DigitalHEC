import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppointserviceService } from 'src/app/appointservice.service'

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit {
  @Input() showMePartially3: boolean;
  searchText: string=""; 
  constructor(public appointserviceService: AppointserviceService) { }
  specialArray=[];
  ngOnInit(): void {
    this.appointserviceService.getDoctor().subscribe(
      list=>{
        this.specialArray =list.map(item => {
          return{
            $key:item.key,
            ...item.payload.val()

          };
        });
      });
  }
  filterCondition(custormer){
    return custormer.Speciality.toLowerCase().indexOf(this.searchText.toLowerCase())!=-1;
  }


}
