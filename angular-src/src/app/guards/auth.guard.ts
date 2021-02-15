import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService, private router:Router){
    }
    canActivate(){
        if (this.authService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    // if logged in, cannot type url 
    canAccessByURL(){
        if (this.authService.loggedIn()){
            this.router.navigate(['']);
            return false;
        } else {
            return true;
        }
    }
}