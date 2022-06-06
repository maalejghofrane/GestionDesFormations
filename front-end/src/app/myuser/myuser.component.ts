import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.component.html',
  styleUrls: ['./myuser.component.css']
})
export class MyuserComponent implements OnInit {

  isLoggedIn = false;
  user: any;
  id: any;
  email: any;
  roles: any;


  constructor(private tokenStorage: TokenStorageService, private router: Router) {

  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser().username;
    this.id = this.tokenStorage.getUser().id;
    this.email = this.tokenStorage.getUser().email;
    this.roles = this.tokenStorage.getUser().roles;
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

}
