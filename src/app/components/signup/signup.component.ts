import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent implements OnInit {
  
  users : any ;
  user = new User();
  files: any[] | undefined;
  formData = new FormData();
  selectedFile: File | undefined;
  submitted: boolean = false;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.formData.append('image_user',this.selectedFile);
  }
  
  onSubmit(){
    this.users = this.user;
    for (const key in this.users) {
      if (this.users.hasOwnProperty(key)) {
        this.formData.append(key, this.users[key]);
      }
    }
    this.authService.register(this.formData).subscribe(res=>{
      console.log(res);
      () => {
        this.router.navigate(['/login']);
       }
    } 
     
    )  
  }
  
}