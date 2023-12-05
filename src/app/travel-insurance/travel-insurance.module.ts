import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelInsuranceRoutingModule } from './travel-insurance-routing.module';
import { TravelInsuranceComponent } from './travel-insurance.component';


@NgModule({
  declarations: [
    TravelInsuranceComponent
  ],
  imports: [
    CommonModule,
    TravelInsuranceRoutingModule
  ]
})
export class TravelInsuranceModule { }
