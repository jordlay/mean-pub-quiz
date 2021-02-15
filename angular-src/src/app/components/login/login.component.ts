import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  success = true;
  errorMessage = "";
  // for testing
  user: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {

    this.user = {
      name: String,
      email: String,
      username: String,
      password: String
    }

    // FOR LOCAL TESTING
    // this.user.name = "test";
    // this.user.email = "test@test.com";
    // this.user.username = "test";
    // this.user.password = "test";

    this.router.navigate(['/dashboard']);
    if (this.username === undefined || this.username === "" || this.password === undefined || this.password === "") {
      this.success = false;
      setTimeout(()=>{                        
        this.success = true;
   }, 3000);
    } else {
      const user = {
        username: this.username,
        password: this.password
      }
      this.authService.authenticateUser(user).subscribe(data => {
        if ((data as any).success) {
          this.authService.storeUserData((data as any).token, (data as any).user);
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
          this.errorMessage = (data as any).msg;
          setTimeout(()=>{                        
            this.errorMessage = "";
          }, 3000);
        }
      });
  
    }
    
 
  }
}
