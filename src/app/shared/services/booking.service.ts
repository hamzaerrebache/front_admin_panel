import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  apiUrl = 'http://127.0.0.1:8000/api/bookings';

  constructor(private http: HttpClient) { }

  findAll() : Observable<any> {
     return this.http.get<Booking[]>(`${this.apiUrl}`);
  }
  delete(_id: any){
    return this.http.delete(`${this.apiUrl}/delete/${_id}`);
  }
  find(_id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/show/${_id}`);
  }
  AddBooking(booking: any) {
    console.log('booking', booking);
    return this.http.post(`http://127.0.0.1:8000/api/bookings/store`, booking);
  }
  
  updateBooking(booking: any, id: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, booking);
 }
 
}

