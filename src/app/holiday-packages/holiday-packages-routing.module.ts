import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayPackagesComponent } from './holiday-packages.component';

const routes: Routes = [{ path: '', component: HolidayPackagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayPackagesRoutingModule { }
