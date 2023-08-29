import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {
  clients :any;
  client = new Client() ; 
  isDisabled: boolean = false; 
  submitted: boolean = false;

  constructor(private clientService:ClientService){}
  
  ngOnInit(): void {}


  insertClient(){
    this.clientService.AddClient(this.client).subscribe(res=>{
      console.log(res);
      this.isDisabled= true;
      this.submitted=true;
    })  
  }

}
