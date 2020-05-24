import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(id: string) {
    const x = document.querySelector(id);
    if (x) {
        x.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return false;
}


}
