import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomestaysComponent } from './homestays.component';

const routes: Routes = [{ path: '', component: HomestaysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomestaysRoutingModule { }
