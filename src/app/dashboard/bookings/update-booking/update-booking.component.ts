import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Booking } from 'src/app/shared/models/booking';
import { BookingService } from 'src/app/shared/services/booking.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  booking= new Booking();
  bookings :any;
  formData = new FormData();
  isDisabled =false;
  message = '';

  constructor(
    private bookingService:BookingService,
    private route :ActivatedRoute,
  ) { }

  ngOnInit(): void {
  this.getBooking();
  }

  getBooking(){
    const id = this.route.snapshot.paramMap.get('id'); 
    console.log(id);
    this.bookingService.find(id).subscribe(booking => {
      this.booking = booking; 
    },
    error => {
      console.log(error);
    }
    );
  }
  // updateBooking(){
  //   this.bookings = this.booking;
  //   const id = this.route.snapshot.paramMap.get('id'); 
  //   for (const key in this.bookings) {
  //     if (this.bookings.hasOwnProperty(key)) {
  //       this.formData.append(key, this.bookings[key]);
  //     }
  //     for (const [key, value] of  this.formData.entries()) { console.log(`${key}: ${value}`); }
  //     this.bookingService.updateBooking( this.formData, id).subscribe(res => {
  //       this.isDisabled = true;
  //       console.log(res);
  //     });
  // }
  // }
  updateBooking(): void {
    this.bookingService.updateBooking(this.booking, this.booking.id)
      .subscribe(
        response => {
          console.log(response);
          this.isDisabled = true;
          this.message = 'Client a ete updating ';
        });
}

}
