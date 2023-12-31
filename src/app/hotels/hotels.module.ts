import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFiltersComponent } from './hotel-filters/hotel-filters.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelReviewComponent } from './hotel-review/hotel-review.component';




@NgModule({
  declarations: [
    HotelsComponent,
    HotelListComponent,
    HotelFiltersComponent,
    HotelDetailsComponent,
    HotelReviewComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    BsDatepickerModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HotelsModule { }
