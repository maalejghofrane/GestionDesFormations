import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {TokenStorageService} from "../_services/token-storage.service";


@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {
  private baseUrl = 'http://localhost:8090/api/test/domaine';

  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) {
  }

  id: any;
  libelle: any;
  domaines: any = [];
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
    this.http.get("http://localhost:8090/api/test/domaines").subscribe((domaines: any) => {
      this.domaines = domaines;
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
