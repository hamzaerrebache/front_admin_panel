import { Component  } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environments';
import { ClientService } from 'src/app/shared/services/client.service';
import { ClientsBookings } from 'src/app/shared/models/clientsBookings';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent {
  apiUrl = environment.apiUrl;
  pathImage = `${this.apiUrl}/images/vehicules/`;
  clientsBookings!: ClientsBookings[];

  constructor(private clientService:ClientService) {}

  ngOnInit(): void {
    // this.ListClient();
   }

  // ListClient(){
  //   this.clientService.BookingClient()
  //   .subscribe(data => {
  //       this.clientsBookings = data;
  //     console.log(this.clientsBookings);       
  //   }
  //   )}


}
