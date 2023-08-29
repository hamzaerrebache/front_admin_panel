import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddOffereComponent} from './add-offere/add-offere.component';
import {ListOffereComponent } from './list-offere/list-offere.component';
import {UpdateOffereComponent } from './update-offere/update-offere.component';
import {DetailOffereComponent } from './detail-offere/detail-offere.component';

const routes: Routes = [
  { path: 'listes', component: ListOffereComponent},
  { path: 'add', component: AddOffereComponent},
  { path: 'edit/:id', component: UpdateOffereComponent},
  { path: 'detail/:id', component: DetailOffereComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresRoutingModule { }
