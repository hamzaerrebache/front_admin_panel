import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Booking } from 'src/app/shared/models/booking';
import { BookingService } from 'src/app/shared/services/booking.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent  implements OnInit {
  bookings :any;
  booking = new Booking() ; 
  isDisabled: boolean = false;
 
  
  constructor(private bookingService:BookingService,
              public router: Router){
                this.booking = {} as Booking;
              }

  ngOnInit(): void {}

  insertBooking(form: NgForm){
    if (form && form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    this.bookingService.AddBooking(this.booking).subscribe(res=>{
      this.isDisabled= true;
      Swal.fire({
        title: 'bookings!',
        html: ' bookings has been added successfully.',
        timer: 2000,
      }).then(() => {
         this.router.navigateByUrl('/bookings/listes');
      })
    });
  }
  
}
