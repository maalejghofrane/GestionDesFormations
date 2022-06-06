import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-organisme',
  templateUrl: './update-organisme.component.html',
  styleUrls: ['./update-organisme.component.css']
})
export class UpdateOrganismeComponent implements OnInit {

  private baseUrl = 'http://localhost:8090/api/test/organisme';
  organismes: any = [];
  private id = 22;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.http.get('http://localhost:8090/api/test/organisme/'+`${this.id}`
    ).subscribe((organismes: any) => {
        this.organismes = organismes;
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerForm = new FormGroup({
    id: new FormControl(""),
    libelle: new FormControl("")
  });

  loadDomaineById()  {

  }
  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  updateDomaines(organisme: any) {
    this.http.put('http://localhost:8090/api/test/organisme', organisme
    ).subscribe((response) => {
        window.location.href = "http://localhost:4200/";
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerSubmited() {
    this.updateDomaines(this.registerForm.value);
  }
}


