import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://127.0.0.1:8000/api/auth';

  constructor(private http: HttpClient,public router:Router, public tokenService: TokenService) {}
  // User registrationp
  register(user:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  // Login
  signin(user: User): Observable<any> {
    const currentUser:any = user;
    sessionStorage.setItem('currentUser', currentUser);
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-profile`);
  }

  // Log the user out and destroy the session
  logout(): void  {
    sessionStorage.removeItem('currentUser');
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }

  // Check if the user is authenticated by looking for the current user in the session storage
  isAuthenticated(): boolean {
    return sessionStorage.getItem('currentUser') !== null;
  }
}