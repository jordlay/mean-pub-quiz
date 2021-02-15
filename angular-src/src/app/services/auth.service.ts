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
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('users/register', user, {headers: headers})
        .pipe(map((res) => res));  
    }

  editEmail(user: any, newEmail:any){
    let headers = new HttpHeaders();
    user.email = newEmail;
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/editEmail', user, {headers: headers})
      .pipe(map((res) => res));  
  }

  editPassword(user: any, newPassword:any){
    let headers = new HttpHeaders();
    user.password = newPassword;
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/editPassword', user, {headers: headers})
      .pipe(map((res) => res));  
  }

  deleteUser(user: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/deleteUser', user, {headers: headers})
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

  checkUsernameExists(user: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/existingUsername', user, {headers: headers})
      .pipe(map((res) => res));
  }

  checkEmailExists(user: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/existingEmail', user, {headers: headers})
      .pipe(map((res) => res));
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
