import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  emailBoolean = false;
  passwordBoolean = false;
  deleteBoolean = false;
  email: any;
  password: any;
  errorMessage = "";
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    // FOR LOCAL FE TESTING
    this.user = {
      name: String,
      email: String,
      username: String,
      password: String
    }
    // FOR LOCAL FE TESTING
    // this.user.name = "test";
    // this.user.email = "test@test.com";
    // this.user.username = "test";
    // this.user.password = "test";

    this.authService.getProfile().subscribe( (profile: { user: any; }) => {
      this.user = profile.user;
    },
      (err: any) => {
      console.log(err);
      return false;
    });

  }

editEmail() {
  this.passwordBoolean = false;
  this.deleteBoolean = false;
  return this.emailBoolean = !this.emailBoolean;
}

onEditEmailSubmit() {
  if (this.email === this.user.email) {
    this.errorMessage = "That is your current email address!";
    setTimeout(()=>{                        
      this.errorMessage = "";
    }, 3000); 
  } else if ( this.email === undefined || this.email === "" || !(this.email.includes("@")) || !(this.email.endsWith(".com") || this.email.endsWith(".co.uk") || this.email.endsWith(".ac.uk"))) {
    this.errorMessage = "Invalid Email Address!";
    setTimeout(()=>{                        
      this.errorMessage = "";
    }, 3000); 
  } else {
        this.authService.editEmail(this.user, this.email).subscribe( () => {},
        (err: any) => {
        console.log(err);
        return false;
        });
        this.emailBoolean = !this.emailBoolean;
  }
}

editPassword() {
  this.emailBoolean = false;
  this.deleteBoolean = false;
  return this.passwordBoolean = !this.passwordBoolean;
}

onEditPasswordSubmit() {
  if ( this.email === undefined || this.email === "") {
    this.errorMessage = "Invalid Password!"
  } else {
    this.authService.editPassword(this.user, this.password).subscribe( () => {},
          (err: any) => {
          console.log(err);
          return false;
        });
    this.passwordBoolean = !this.passwordBoolean;
  }
}

deleteUser(){
  this.emailBoolean = false;
  this.passwordBoolean = false;
  return this.deleteBoolean = !this.deleteBoolean;
}


onDeleteUserSubmit() {
  this.authService.getProfile().subscribe( (profile: { user: any; }) => {
    this.user = profile.user;
    this.authService.deleteUser(this.user).subscribe( () => {},
      (err: any) => {
      console.log(err);
      return false;
    });
    },
    (err: any) => {
    console.log(err);
    return false;
    }
  );
  this.authService.logout();
  this.router.navigate(['/login']);
}

}
