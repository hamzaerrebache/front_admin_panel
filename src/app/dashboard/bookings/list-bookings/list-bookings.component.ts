import { Component , OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Booking } from 'src/app/shared/models/booking';
import { BookingService } from 'src/app/shared/services/booking.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-list-bookings',
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.css']
})
export class ListBookingsComponent implements OnInit {
  bookings!: Booking[];
  apiUrl = environment.apiUrl;
  pathImage = `${this.apiUrl}/images/vehicules/`;
  id:any ;

   constructor(
    private bookingService:BookingService,
    private router:Router,
    ){}

   ngOnInit(){
    this.getBookings();
  }
  getBookings() {
    this.bookingService.findAll()
        .subscribe(data => {
            this.bookings = data;
          console.log(this.bookings);       
        }
 )}

 deleteBooking(_id: any){
  this.bookingService.delete(_id)
      .subscribe(()=>{
       this.bookings  = this.bookings.filter(booking=>booking.id !=_id  )
      })

    }
    edit(_id: any) {
      this.router.navigateByUrl('/bookings/update/'+_id);
    };  
 

}
