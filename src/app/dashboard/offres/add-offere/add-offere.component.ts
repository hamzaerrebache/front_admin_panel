import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import { Offere } from 'src/app/shared/models/offere';
import {OfferService} from 'src/app/shared/services/offer.service';


@Component({
  selector: 'app-add-offere',
  templateUrl: './add-offere.component.html',
  styleUrls: ['./add-offere.component.css']
})
export class AddOffereComponent implements OnInit {
  offers : any ;
  offer = new Offere(); 
  isDisabled: boolean = false;

  constructor(private offerService : OfferService,
              public router: Router ){}

   ngOnInit(): void {}

   insertOffer(){
    this.offerService.AddOffer(this.offer).subscribe(res=>{
      this.isDisabled= true;
      Swal.fire({
        title: 'offers!',
        html: ' offers has been added successfully.',
        timer: 2000,
      }).then(() => {
         this.router.navigateByUrl('/offers/listes');
      })
    });
  }
}
