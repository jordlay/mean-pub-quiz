import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: String;
  username!: String;
  email!: String;
  password!: String;
  success = true;
  // isValid = false;
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    if (this.name === undefined || this.name === "" || this.email === undefined || this.email === ""  || this.password === undefined || this.password === "" || this.username === undefined || this.username === "") {
      this.success = false;
      setTimeout(()=>{                           
        this.success = true;
      }, 3000); 
    } else if (this.name.length > 40 || this.email.length > 40 || this.password.length > 40 || this.username.length > 40 ) {
      this.errorMessage = "Too many characters used!";
      setTimeout(()=>{                        
        this.errorMessage = "";
      }, 3000); 
    } else if ( !(this.email.includes("@")) || !(this.email.endsWith(".com") || this.email.endsWith(".co.uk") || this.email.endsWith(".ac.uk"))) {
      this.errorMessage = "Invalid Email Address!";
      setTimeout(()=>{                        
        this.errorMessage = "";
      }, 3000); 
    } else {
      const user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password
      }
      this.authService.checkUsernameExists(user).subscribe(data => {
        if ((data as any).success === true) {
          this.errorMessage = "This username is already taken, please choose another!";
          setTimeout(()=>{                          
            this.errorMessage = "";
          }, 3000);
        } else {
          this.authService.checkEmailExists(user).subscribe(data => {
            if ((data as any).success === true) {
              this.errorMessage = "That email is already associated with an account, try logging in instead!";
              setTimeout(()=>{                     
                this.errorMessage = "";
              }, 3000);
            } else {
              this.authService.registerUser(user).subscribe(data => {
                if ((data as any).success) {
                  this.success = true;
                  this.router.navigate(['/login']);
                } else {
                  this.router.navigate(['/register']);
                  this.success = false;
                }
              });
            }
          });  
        }
      });  
    }
  }
}
