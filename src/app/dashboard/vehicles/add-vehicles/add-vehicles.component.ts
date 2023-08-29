import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicule } from 'src/app/shared/models/vehicule';
import { VehiculeService } from 'src/app/shared/services/vehicule.service'; 
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css']
})
export class AddVehiclesComponent implements OnInit {
  vehicules: any;
  vehicule = new Vehicule();
  files: any[] | undefined;
  formData = new FormData();
  selectedFile: File | undefined;
  submitted: boolean = false;
  colors:any=["blanc","noir","gris foncé","gris argent","bleu ","rouge ","marron ","vert ","jaune"];
  fuel_types:any=["essance","mazot","electrique"];

  constructor(private vehiculeService: VehiculeService,
              public router: Router,
      
              ) {this.vehicule = {} as Vehicule; }

  ngOnInit(): void { }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.formData.append('images',this.selectedFile);
  }

  insertVehicule(form: NgForm) {
    this.vehicules = this.vehicule;
    if (form && form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    for (const key in this.vehicules) {
      if (this.vehicules.hasOwnProperty(key)) {
        this.formData.append(key, this.vehicules[key]);
      }
    }
    this.vehiculeService.Addvehicule(this.formData).subscribe(res => {
      Swal.fire({
        title: 'Vehicle!',
        html: ' Vehicle has been added successfully.',
        timer: 2000,
      }).then(() => {
         this.router.navigateByUrl('/vehicles/listes');
      })
    },
    error => {
      console.log(error);
    }
    );
}


}
