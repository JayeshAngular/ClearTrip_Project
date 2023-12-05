import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayPackagesRoutingModule } from './holiday-packages-routing.module';
import { HolidayPackagesComponent } from './holiday-packages.component';


@NgModule({
  declarations: [
    HolidayPackagesComponent
  ],
  imports: [
    CommonModule,
    HolidayPackagesRoutingModule
  ]
})
export class HolidayPackagesModule { }
