import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { DetailVehiclesComponent } from './detail-vehicles/detail-vehicles.component';
import { UpdateVehiclesComponent } from './update-vehicles/update-vehicles.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';


const routes: Routes = [ 
  { path: 'vehicles/listes', component: ListVehiclesComponent}, 
  { path: 'vehicles/detail/:id', component: DetailVehiclesComponent }, 
  { path: 'vehicles/edit/:id', component: UpdateVehiclesComponent },
  { path: 'vehicles/add', component: AddVehiclesComponent},
  
];

@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class VehiclesRoutingModule { }
