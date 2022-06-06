import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-participant',
  templateUrl: './create-participant.component.html',
  styleUrls: ['./create-participant.component.css']
})
export class CreateParticipantComponent implements OnInit {

  private baseUrl = 'http://localhost:8090/api/test/domaine';
  contactForm!: FormGroup;


  organismes: any = [];
  pays: any = [];
  profils: any = [];

  css: object | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) {
    this.loadOrganismes();
    this.loadPays();
    this.loadProfils();
  }

  loadOrganismes() {
    this.http.get("http://localhost:8090/api/test/organisme").subscribe((organismes: any) => {
      this.organismes = organismes;
    })
  }

  loadPays() {
    this.http.get("http://localhost:8090/api/test/Pays").subscribe((pays: any) => {
      this.pays = pays;
    })
  }

  loadProfils() {
    this.http.get("http://localhost:8090/api/test/profils").subscribe((profils: any) => {
      this.profils = profils;
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
