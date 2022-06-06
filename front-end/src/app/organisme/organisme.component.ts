import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-organisme',
  templateUrl: './organisme.component.html',
  styleUrls: ['./organisme.component.css']
})
export class OrganismeComponent implements OnInit {

  private baseUrl = 'http://localhost:8090/api/test/organisme';

  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) {
  }

  id: any;
  libelle: any;
  organismes: any = [];
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
    id: new FormControl("entrer l 'id"),
    libelle: new FormControl("Saisir le libelle")
  });

  loadDomaines() {
    this.http.get("http://localhost:8090/api/test/organisme").subscribe((organismes: any) => {
      this.organismes = organismes;
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
    this.router.navigate(['/updateOrganisme/' + `${id}`]);
    //window.location.href = "http://localhost:4200/createDomaine?id=" + `${id}` + "libelle=" + `${libelle}`;
  }

  updateDomaine(organismes: any) {
    this.http.put("http://localhost:8090/api/test/organisme", organismes
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
