import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offere } from '../models/offere';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  apiUrl = 'http://127.0.0.1:8000/api/offers';
  
  constructor(private http: HttpClient) { }
  
  findAll() : Observable<any> {
    return this.http.get<Offere[]>(`${this.apiUrl}`);
 }
 delete(_id: any){
  return this.http.delete(`${this.apiUrl}/delete/${_id}`);
 } 
 AddOffer(offer: any) {
  return this.http.post(`${this.apiUrl}/store`, offer);
}
}
