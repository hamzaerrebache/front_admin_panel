import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicule } from '../models/vehicule';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  apiUrl = 'http://127.0.0.1:8000/api/vehicules';
  urlapi = 'http://127.0.0.1:8000/api/vehicules/show';
  constructor(private http: HttpClient) { }



  findAll() : Observable<any> {
     return this.http.get<Vehicule[]>(`${this.apiUrl}`);
  }

  delete(_id: any){
    return this.http.delete(`${this.apiUrl}/delete/${_id}`);
  }

  findVehicle(_id: any): Observable<any> {
    return this.http.get<Vehicule[]>(`${this.apiUrl}/show/${_id}`);
  }

  Addvehicule(vehicle: any) {
    console.log('vehicle', vehicle);
    return this.http.post(`http://127.0.0.1:8000/api/vehicules/store`, vehicle);
  }
  
  getVehicle(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(this.urlapi); // Appel de l'API avec la méthode HTTP GET
  }

  updateVehicle(vehicle: any, id: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update/${id}`, vehicle);
 }

}




