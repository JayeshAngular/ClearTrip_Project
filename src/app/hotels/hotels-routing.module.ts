import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelReviewComponent } from './hotel-review/hotel-review.component';
import { loginGuard } from '../core/routingGuard/login.guard';

const routes: Routes = [
  { path: '', component: HotelsComponent },
  {path:'hotel-list', component:HotelListComponent},
  {path:'hotel-details', component:HotelDetailsComponent},
  {path:'hotel-review', component:HotelReviewComponent, canActivate:[loginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
