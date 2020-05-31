import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppointserviceService } from 'src/app/appointservice.service'
@Component({
  selector: 'app-campshealth',
  templateUrl: './campshealth.component.html',
  styleUrls: ['./campshealth.component.scss']
})
export class CampshealthComponent implements OnInit {

  @Input() showMePartially2: boolean;
  constructor(public appointserviceService: AppointserviceService) { }
campsArray=[];
  ngOnInit(): void {
    this.appointserviceService.getCamps().subscribe(
      list=>{
        this.campsArray =list.map(item => {
          return{
            $key:item.key,
            ...item.payload.val()

          };
        });
      });
  }

}
