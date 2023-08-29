import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { DetailClientsComponent } from './detail-clients/detail-clients.component';
import { UpdateClientsComponent } from './update-clients/update-clients.component';


@NgModule({
  declarations: [
    AddClientsComponent,
    ListClientsComponent,
    DetailClientsComponent,
    UpdateClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
