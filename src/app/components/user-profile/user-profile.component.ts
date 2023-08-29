import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environments';
// User interface

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userProfile!: User;
  urlapi='http://127.0.0.1:8000/';
  apiUrl = environment.apiUrl;
  pathImage = `${this.apiUrl}/images/users/`;


  constructor(public authService: AuthService) {}

  ngOnInit() {
     this.getProfile();
  }

  getProfile(){
    this.authService.profileUser().subscribe((data: any) => {
      this.userProfile = data;
      console.log(data)
    });
  }
  handleImageError(event :any){
    event.target.src='assets/img/profile.png';
  }
}
