import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  helper = new JwtHelperService();
  constructor(private http: HttpClient) { }

  registerUser(user: any){
    console.log('in register user', user);
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      console.log('headers:', headers);
      return this.http.post('users/register', user, {headers: headers})
        .pipe(map((res) => res));
      
    }

  authenticateUser(user: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
      .pipe(map((res) => res));
  }

  getProfile(): any{
    this.loadToken();
    let headers = new HttpHeaders().append('Authorization', this.authToken).append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
  }

  checkUserExists() {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get('users/exists', {headers: headers})
  }
  
  storeUserData(token: string, user: any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return !(this.helper.isTokenExpired(localStorage.id_token));
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

  }
}
