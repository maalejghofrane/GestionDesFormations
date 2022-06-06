import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  user: any;
  isAdmin = false ;
  userRole : any;

  constructor(private tokenStorage: TokenStorageService, private router: Router) {

  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser().username;
    this.userRole = this.tokenStorage.getUser().roles;

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    if (this.userRole[0] ==="ROLE_ADMIN") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  console.log("userRole");
  console.log(this.userRole[0]);

  }
  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['login']);
  }
}
