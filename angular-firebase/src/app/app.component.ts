import { Component } from '@angular/core';
import { AF } from './providers/af';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Angular Firebase";
  public isLoggedIn: boolean;
  
  constructor(public afService: AF, private router: Router) {
    
    this.afService.af.authState.subscribe((auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
        else {
          console.log("Successfully Logged in.");
          this.afService.displayName = auth.displayName;
          this.afService.email = auth.email;          
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  }
  
  logout() {
    this.afService.logout();
  }
}
