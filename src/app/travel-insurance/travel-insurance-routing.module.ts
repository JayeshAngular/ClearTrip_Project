import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelInsuranceComponent } from './travel-insurance.component';

const routes: Routes = [{ path: '', component: TravelInsuranceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelInsuranceRoutingModule { }
