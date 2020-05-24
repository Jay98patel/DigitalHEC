import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

import { ContactComponent } from './contact/contact.component';
import { HomefooterComponent } from './homefooter/homefooter.component';
import { ActionComponent } from './action/action.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    HomefooterComponent,
    ContactComponent,
    ActionComponent
  ],
  exports:[ 


  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]

})
export class HomeModule { }
