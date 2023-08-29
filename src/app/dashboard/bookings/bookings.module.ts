import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { BookingsRoutingModule } from './bookings-routing.module';
import {ListBookingsComponent} from './list-bookings/list-bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component'


@NgModule({
  declarations: [
    ListBookingsComponent,
    AddBookingComponent,
    UpdateBookingComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ]
})
export class BookingsModule { }
