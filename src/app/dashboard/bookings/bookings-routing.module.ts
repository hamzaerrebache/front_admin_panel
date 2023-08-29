import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookingsComponent } from './list-bookings/list-bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';

const routes: Routes = [
  { path: 'listes', component: ListBookingsComponent},
  { path: 'add', component: AddBookingComponent},
  { path: 'update/:id', component:UpdateBookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
