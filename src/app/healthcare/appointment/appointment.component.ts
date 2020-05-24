import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  @Input() showMePartially: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
