import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiUrl = 'http://127.0.0.1:8000/api/clients';

  constructor(private http: HttpClient) { }

  findAll() : Observable<any> {
    return this.http.get<Client[]>(`${this.apiUrl}`);
  }

  delete(_id: any){
    return this.http.delete(`${this.apiUrl}/delete/${_id}`);
  }

  findClientsBooking(_id: any): Observable<any> {
    return this.http.get<Client[]>(`${this.apiUrl}/detail/${_id}`);
  }

  AddClient(client: any) {
    console.log(client);
    return this.http.post(`http://127.0.0.1:8000/api/clients/store`, client);
  }
  
  // BookingClient($agency_id:any){
  //   alert();
  //   console.log( this.http.get<ClientsBookings[]>(`${this.apiUrl}/show/${$agency_id}`));
  //   return this.http.get<ClientsBookings[]>(`${this.apiUrl}/show`);
  // }

}
