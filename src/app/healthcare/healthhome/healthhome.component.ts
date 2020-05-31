import { Component, OnInit,Renderer2, AfterViewInit  } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
@Component({
  selector: 'app-healthhome',
  templateUrl: './healthhome.component.html',
  styleUrls: ['./healthhome.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class HealthhomeComponent implements OnInit,AfterViewInit {
  current = 0;
  
  carousel: Array<object> = [{
    image: 'assets/img/1school.jpg',
    carouselCaptionTitle: 'Third slide label',
    desc: 'jay'   
  },
  {
    image: 'assets/img/2school.jpg',
    carouselCaptionTitle: 'sec slide label',
    desc: 'lorem ipsum'
  }
]
ngAfterViewInit() {
}

//appointment
showVar: boolean = false;
  toggleChild(){
    this.showVar = !this.showVar; 
}

scrollToSection(id: string) {
  setTimeout(() => {
  const x = 'appointment'
  const element =this.renderer.selectRootElement(`#${x}`, true);
  if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  return false;
}, 700);
}
//map
showVar1: boolean = false;
  toggleChild1(){
    this.showVar1 = !this.showVar1; 
}

scrollToSection1(id: string) {
  setTimeout(() => {
  const x = 'map'
  const element =this.renderer.selectRootElement(`#${x}`, true);
  if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  return false;
}, 1000);
}
//campshealth
showVar2: boolean = false;
  toggleChild2(){
    this.showVar2 = !this.showVar2; 
}

scrollToSection2(id: string) {
  setTimeout(() => {
  const x = 'camp'
  const element =this.renderer.selectRootElement(`#${x}`, true);
  if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  return false;
}, 1000);
}

//campshealthend
//specialist
showVar3: boolean = false;
  toggleChild3(){
    this.showVar3 = !this.showVar3; 
}

scrollToSection3(id: string) {
  setTimeout(() => {
  const x = 'special'
  const element =this.renderer.selectRootElement(`#${x}`, true);
  if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  return false;
}, 1000);
}


//specialistend

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.carousel.length;
    }, 2000);
  }
  
}
