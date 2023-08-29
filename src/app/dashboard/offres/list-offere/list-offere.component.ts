import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Offere } from 'src/app/shared/models/offere';
import { OfferService } from 'src/app/shared/services/offer.service';
import { environment } from 'src/environments/environments';
@Component({
  selector: 'app-list-offere',
  templateUrl: './list-offere.component.html',
  styleUrls: ['./list-offere.component.css']
})
export class ListOffereComponent {
  offers!: Offere[];
  apiUrl = environment.apiUrl;

  constructor (
    private offerService :OfferService,
    private  router : Router
  ){}

  ngOnInit(){
    this.getOffers(); 
   }

  getOffers() {
    this.offerService.findAll()
        .subscribe(data => {
            this.offers = data;
          console.log(this.offers);    
        }
 )}

 deleteOffers(_id: any){
  const confirmed = confirm("Voulez-vous vraiment supprimer cette offre ?");
  if (confirmed) {
     this.offerService.delete(_id)
         .subscribe(()=>{
          this.offers  = this.offers.filter(offre=>offre.id !=_id  )
         })
        }
 }

 detail(_id: any) {
  this.router.navigateByUrl('/offers/detail/'+_id);
 }; 
  edit(_id: any) {
    this.router.navigateByUrl('/offers/edit/'+_id);
  };  
  addOffers() {
    this.router.navigateByUrl('/offers/add');
}; 
 
}
