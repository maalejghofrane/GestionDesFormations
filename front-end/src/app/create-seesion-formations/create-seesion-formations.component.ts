import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-seesion-formations',
  templateUrl: './create-seesion-formations.component.html',
  styleUrls: ['./create-seesion-formations.component.css']
})
export class CreateSeesionFormationsComponent implements OnInit {


  private baseUrl = 'http://localhost:8090/api/test/domaine';
  contactForm!: FormGroup;


  organismes: any = [];
  formations: any = [];
  css: object | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) {
    this.loadOrganismes();
    this.loadFormations();
  }

  loadOrganismes() {
    this.http.get("http://localhost:8090/api/test/organisme").subscribe((organismes: any) => {
      this.organismes = organismes;
    })
  }

  loadFormations() {
    this.http.get("http://localhost:8090/api/test/formation").subscribe((formations: any) => {
      this.formations = formations;
    })
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      country: [null]
    });
  }

  submit() {
    console.log("Form Submitted")
    console.log(this.contactForm.value)
    console.log(this.organismes);
  }
}
