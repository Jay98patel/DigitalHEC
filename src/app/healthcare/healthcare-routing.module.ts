import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthhomeComponent } from './healthhome/healthhome.component';
const routes: Routes = [
  { path: '', redirectTo: 'health-home', pathMatch: 'full' },
  {
    path: 'health-home',
    component: HealthhomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcareRoutingModule { }