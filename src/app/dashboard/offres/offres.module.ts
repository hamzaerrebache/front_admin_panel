import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { ListOffereComponent } from './list-offere/list-offere.component';
import { UpdateOffereComponent } from './update-offere/update-offere.component';
import { DetailOffereComponent } from './detail-offere/detail-offere.component';
import { AddOffereComponent } from './add-offere/add-offere.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';




@NgModule({
  declarations: [
    ListOffereComponent,
    UpdateOffereComponent,
    DetailOffereComponent,
    AddOffereComponent
  ],
  imports: [
    CommonModule,
    OffresRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class OffresModule { }
