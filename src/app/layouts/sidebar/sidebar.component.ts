import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/services/auth-state.service';
import { TokenService } from 'src/app/shared/services/token.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isSignedIn!: boolean;
  activeMenuItem: boolean = false;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public activatedRoute: ActivatedRoute,

  ) {
   this.checkUrl();
  }
  
  ngOnInit() {
    this.signedIn();
  }

  signedIn() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

  checkUrl() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activeMenuItem = this.activatedRoute.snapshot.url.join('/') === val.url; 
      }
    }
    );
  }

  isActive(routePath: string) {
    return this.activatedRoute.snapshot.url.join('/') === routePath;
  }

}
