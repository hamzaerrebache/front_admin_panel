import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Vehicule } from 'src/app/shared/models/vehicule';
import { VehiculeService } from 'src/app/shared/services/vehicule.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-detail-vehicles',
  templateUrl: './detail-vehicles.component.html',
  styleUrls: ['./detail-vehicles.component.css']
})
export class DetailVehiclesComponent {
  vehicules !: Vehicule;
  thumbnail:any;
  objectURL:any;
  apiUrl = environment.apiUrl;
  pathImage = `${this.apiUrl}/images/vehicules/`;

  constructor(
    private vehiculeService:VehiculeService,
    private route :ActivatedRoute,
    private sanitizer: DomSanitizer
    ){} 
  
  ngOnInit() : void{
   this.detailVehicule();
  }
  detailVehicule(){
    const id = this.route.snapshot.paramMap.get('id'); // Récupération de l'identifiant de produit depuis l'URL
    this.vehiculeService.findVehicle(id).subscribe(vehicules => {
      this.vehicules = vehicules; // Récupération des données du produit depuis le service
      console.log(this.vehicules);
      // this.objectURL = this.urlapi+'/'+this.vehicles.images;;
      // this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(this.objectURL);
      console.log(this.thumbnail);
    });
      
  }

  
}