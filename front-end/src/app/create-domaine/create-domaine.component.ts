import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-create-domaine',
  templateUrl: './create-domaine.component.html',
  styleUrls: ['./create-domaine.component.css'],
})
export class CreateDomaineComponent implements OnInit {
  private baseUrl = 'http://localhost:8090/api/test/domaine';
  domaines: any = [];
  id = 144;
  libelle = "";
  params: any;
  filter$: Observable<string> | undefined;

  ngOnInit(): void {

  }

  registerForm = new FormGroup({
    id: new FormControl(""),
    libelle: new FormControl("")
  });

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  createDomaines(domaine: any
  ) {
    this.http.post('http://localhost:8090/api/test/domaine', domaine
    ).subscribe((response) => {
        window.location.href = "http://localhost:4200/domaines";
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerSubmited() {
    this.createDomaines(this.registerForm.value);
  }
}
