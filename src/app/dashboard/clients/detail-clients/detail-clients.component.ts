import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-detail-clients',
  templateUrl: './detail-clients.component.html',
  styleUrls: ['./detail-clients.component.css']
})
export class DetailClientsComponent {
  apiUrl = environment.apiUrl;
  pathImage = `${this.apiUrl}/images/vehicules/`;

}
