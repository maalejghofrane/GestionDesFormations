import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TokenStorageService} from "../_services/token-storage.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit {

  private baseUrl = 'http://localhost:8090/api/test/profils';

  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) {
  }

  id: any;
  libelle: any;
  profils: any = [];
  isLoggedIn = false;

  ngOnInit(): void {
    this.loadDomaines();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  registerForm = new FormGroup({
    id: new FormControl("entrer l'id"),
    libelle: new FormControl("Saisir le libelle")
  });

  loadDomaines() {
    this.http.get("http://localhost:8090/api/test/profils").subscribe((profils: any) => {
      this.profils = profils;
    })
  }


  deleteDomaine(id: any) {
    this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'}
    ).subscribe((response) => {
        window.location.reload();
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  updateNavigateDomaine(id: any, libelle: any) {
    this.id = id;
    this.libelle = libelle;
    //this.router.navigate(['/updateDomaine'], {queryParams: {id: `${id}`}});
    this.router.navigate(['/updateProfil/' + `${id}`]);
    //window.location.href = "http://localhost:4200/createDomaine?id=" + `${id}` + "libelle=" + `${libelle}`;
  }

  updateDomaine(profil: any) {
    this.http.put("http://localhost:8090/api/test/profil", profil
    ).subscribe((response) => {
        alert(JSON.stringify(response));
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerSubmited() {
    console.log(this.registerForm.value);
    this.updateDomaine(this.registerForm.value);
  }
}
