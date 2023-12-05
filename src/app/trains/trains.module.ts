import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainsRoutingModule } from './trains-routing.module';
import { TrainsComponent } from './trains.component';


@NgModule({
  declarations: [
    TrainsComponent
  ],
  imports: [
    CommonModule,
    TrainsRoutingModule
  ]
})
export class TrainsModule { }
