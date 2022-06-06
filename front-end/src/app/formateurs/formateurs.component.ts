import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TokenStorageService} from "../_services/token-storage.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {

  private baseUrl = 'http://localhost:8090/api/test/domaine';

  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) {
  }

  id: any;
  libelle: any;
  formateurs: any = [];
  isLoggedIn = false;

  ngOnInit(): void {
    this.loadFormateurs();
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

  loadFormateurs() {
    this.http.get("http://localhost:8090/api/test/formateurs").subscribe((formateurs: any) => {
      this.formateurs = formateurs;
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
    this.router.navigate(['/updateDomaine/' + `${id}`]);
    //window.location.href = "http://localhost:4200/createDomaine?id=" + `${id}` + "libelle=" + `${libelle}`;
  }

  updateDomaine(domaine: any) {
    this.http.put("http://localhost:8090/api/test/domaine", domaine
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
