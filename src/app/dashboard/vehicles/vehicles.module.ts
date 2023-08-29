import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { UpdateVehiclesComponent } from './update-vehicles/update-vehicles.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { DetailVehiclesComponent } from './detail-vehicles/detail-vehicles.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';




@NgModule({
  declarations: [
    ListVehiclesComponent,
    AddVehiclesComponent,
    UpdateVehiclesComponent,
    DetailVehiclesComponent
  ],
  imports: [
    CommonModule,             
    VehiclesRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class VehiclesModule { }
