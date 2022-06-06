import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable, shareReplay} from "rxjs";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private roles: string[] | undefined;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string | undefined;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result: { matches: any; }) => result.matches),
      shareReplay()
    );
  router: any;
  drawer: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      // @ts-ignore
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // @ts-ignore
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    this.redirect();
    window.location.reload();
  }

  redirect() {
    this.router.navigate(['./login']);
  }

}
