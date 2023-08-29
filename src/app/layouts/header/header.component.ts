import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environments';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userProfile!: User;
  urlapi='http://127.0.0.1:8000/';
  apiUrl = environment.apiUrl;
  pathImage = `${this.apiUrl}/images/users/`;

  constructor(@Inject(DOCUMENT) private document: Document,
  public authService: AuthService,public router: Router,
  public tokenService: TokenService ) { }

  ngOnInit() {
    this.getProfile();
 }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
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

  logout() {
    this.authService.logout();
  }
}
