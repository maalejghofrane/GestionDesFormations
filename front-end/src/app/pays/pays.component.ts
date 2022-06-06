import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {PaysService} from "../services/pays.service";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

  private baseUrl = 'http://localhost:8090/api/test/Pays';

  constructor(private http: HttpClient, private router: Router,private tokenStorage: TokenStorageService) {
  }

  id: any;
  libelle: any;
  pays: any = [];
  isLoggedIn = false;


  ngOnInit(): void {
    this.loadPays();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  registerForm = new FormGroup({
    id: new FormControl("entrer l 'id"),
    nom: new FormControl("Saisir le nom")
  });

  loadPays() {
    this.http.get("http://localhost:8090/api/test/Pays").subscribe((pays: any) => {
      this.pays = pays;
    })
  }


  deletePays(id: any) {
    this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'}
    ).subscribe((response) => {
        window.location.reload();
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  updateNavigatePays(id: any, libelle: any) {
    this.id = id;
    this.libelle = libelle;
    //this.router.navigate(['/updateDomaine'], {queryParams: {id: `${id}`}});
    this.router.navigate(['/updatePays/'+`${id}`]);
    //window.location.href = "http://localhost:4200/createDomaine?id=" + `${id}` + "libelle=" + `${libelle}`;
  }

  updateDomaine(domaine: any) {
    this.http.put("http://localhost:8090/api/test/Pays", this.pays
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
