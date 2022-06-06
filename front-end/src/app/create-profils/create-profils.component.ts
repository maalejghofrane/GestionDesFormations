import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-profils',
  templateUrl: './create-profils.component.html',
  styleUrls: ['./create-profils.component.css']
})
export class CreateProfilsComponent implements OnInit {
  private baseUrl = 'http://localhost:8090/api/test/profils';
  profils: any = [];
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

  createDomaines(profils: any
  ) {
    this.http.post('http://localhost:8090/api/test/profils', profils
    ).subscribe((response) => {
        window.location.href = "http://localhost:4200/profils";
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerSubmited() {
    this.createDomaines(this.registerForm.value);
  }
}
