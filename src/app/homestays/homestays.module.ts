import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomestaysRoutingModule } from './homestays-routing.module';
import { HomestaysComponent } from './homestays.component';


@NgModule({
  declarations: [
    HomestaysComponent
  ],
  imports: [
    CommonModule,
    HomestaysRoutingModule
  ]
})
export class HomestaysModule { }
