import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicule } from 'src/app/shared/models/vehicule';
import { VehiculeService } from 'src/app/shared/services/vehicule.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-update-vehicles',
  templateUrl: './update-vehicles.component.html',
  styleUrls: ['./update-vehicles.component.css']
})
export class UpdateVehiclesComponent {
  formData = new FormData();
  thumbnail:any;
  objectURL:any;
  apiUrl = environment.apiUrl;
  pathImage = `${this.apiUrl}/images/vehicules/`;
 // vehicule !: Vehicle;
  vehicules : any;
  files: any[] | undefined;
  updateFormData = new FormData();
  selectedFile ?:File ;
  submitted: boolean = false;
  colors:any=["blanc","noir","gris foncé","gris argent","bleu ","rouge ","marron ","vert ","jaune"];
  fuel_types:any=["essance","mazot","electrique"];
  vehicule = new Vehicule();
  vehicleId: number = 0;


  constructor(
    private vehiculeService:VehiculeService,
    private route :ActivatedRoute,
    ){} 

    ngOnInit() : void{
      this.getVehicule();
     }

     getVehicule(){
       const id = this.route.snapshot.paramMap.get('id'); // Récupération de l'identifiant de produit depuis l'URL
       this.vehiculeService.findVehicle(id).subscribe(vehicule => {
         this.vehicule = vehicule; // Récupération des données du produit depuis le service
       });
     }

     onFileSelected(event: any) {
      this.selectedFile = <File>event.target.files[0];
      console.log(this.selectedFile);
      this.formData.append('images',this.selectedFile);
      // console.log(this.updateFormData);
    }

    updateVehicle(){
      this.vehicules = this.vehicule;
      const id = this.route.snapshot.paramMap.get('id'); // Récupération de l'identifiant de produit depuis l'URL 
      for (const key in this.vehicules) {
        if (this.vehicules.hasOwnProperty(key)) {
          console.log('vehiclessdgyeguerogy',this.vehicules[key]);
          this.formData.append(key, this.vehicules[key]);
        }
      }
      for (const [key, value] of  this.formData.entries()) { console.log(`${key}: ${value}`); }
      this.vehiculeService.updateVehicle( this.formData, id).subscribe(res => {
        this.submitted = true;
        console.log(res);
      });

    } 

  
}
