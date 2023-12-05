import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainsComponent } from './trains.component';

const routes: Routes = [{ path: '', component: TrainsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainsRoutingModule { }
