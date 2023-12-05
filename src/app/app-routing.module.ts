import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },
  { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
  {path:'', redirectTo:'/hotels',pathMatch:"full"},
  { path: 'homestays', loadChildren: () => import('./homestays/homestays.module').then(m => m.HomestaysModule) },
  { path: 'trains', loadChildren: () => import('./trains/trains.module').then(m => m.TrainsModule) },
  { path: 'buses', loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule) },
  { path: 'cabs', loadChildren: () => import('./cabs/cabs.module').then(m => m.CabsModule) },
  { path: 'holiday-packages', loadChildren: () => import('./holiday-packages/holiday-packages.module').then(m => m.HolidayPackagesModule) },
  { path: 'travel-insurance', loadChildren: () => import('./travel-insurance/travel-insurance.module').then(m => m.TravelInsuranceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
