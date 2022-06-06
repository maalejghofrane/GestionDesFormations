import { Component, OnInit } from '@angular/core';
import {OrganismeModel} from "../models/organisme.model";
import {FormateurModel} from "../models/formateur.model";
import {OrganismeService} from "../services/organisme.service";
import {FormateurService} from "../services/formateur.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  public organismes: any | OrganismeModel[];
  public formateurs: any | FormateurModel[];
  public deleteFormateur: any | FormateurModel;
  public editFormateur : any | FormateurModel;
  public formateursU : any =[];
  private id: any;

  updateForm = new FormGroup({
    id: new FormControl(""),
    email: new FormControl(""),
    nom: new FormControl(""),
    prenom: new FormControl(""),
    tel: new FormControl(""),
    type: new FormControl(''),
    organisme: new FormControl('')
  });
  constructor(private organismeService: OrganismeService, private formateurService: FormateurService,
              private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getOrganismes();
    this.id = this.route.snapshot.params['id'];

    this.http.get('http://localhost:8090/api/test/formateurs/'+`${this.id}`
    ).subscribe((formateursU: any) => {
        this.formateursU = formateursU;
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  public getOrganismes(): void {
    this.organismeService.getOrganismes().subscribe(
      (response: OrganismeModel[]) => {
        this.organismes = response;
        console.log(this.organismes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateFormateur(id:any,formateur: FormateurModel) {
    console.log(formateur);
    this.http.put('http://localhost:8090/api/test/formateurs/'+`${this.id}`, formateur
    ).subscribe((response) => {
        window.location.href = "http://localhost:4200/createFormateur";
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  updateSubmited() {
    this.updateFormateur(this.id,this.updateForm.value);
  }
}
