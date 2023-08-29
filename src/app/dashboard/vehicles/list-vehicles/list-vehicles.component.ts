import { Component , OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { Vehicule } from 'src/app/shared/models/vehicule';
import { VehiculeService } from 'src/app/shared/services/vehicule.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {
   vehicules!: Vehicule[];
   apiUrl = environment.apiUrl;
   pathImage = `${this.apiUrl}/images/vehicules/`;
 
   constructor(
    private vehiculeService:VehiculeService ,
    private router:Router,
    ){}

   ngOnInit(){
    this.getVehicles(); 
   }

   getVehicles() {
      this.vehiculeService.findAll()
          .subscribe(data => {
              this.vehicules = data;
            console.log(this.vehicules);    
          }
   )}
   
   deleteVehicles(_id: any){
    const confirmed = confirm("Voulez-vous vraiment supprimer ce véhicule ?");
    if (confirmed) {
       this.vehiculeService.delete(_id)
           .subscribe(()=>{
            this.vehicules  = this.vehicules.filter(vehicule=>vehicule.id !=_id  )
           })
          }
   }

   detail(_id: any) {
    this.router.navigateByUrl('/vehicles/detail/'+_id);
   }; 
    edit(_id: any) {
      this.router.navigateByUrl('/vehicles/edit/'+_id);
    };  
    addVehicles() {
      this.router.navigateByUrl('/vehicles/add');
  }; 
}
