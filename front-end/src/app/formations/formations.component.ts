import { Component, OnInit } from '@angular/core';
import {OrganismeModel} from "../models/organisme.model";
import {FormateurModel} from "../models/formateur.model";
import {OrganismeService} from "../services/organisme.service";
import {FormateurService} from "../services/formateur.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {FormationModel} from "../models/formation.model";
import {FormationService} from "../services/formation.service";
import {DomaineServiceService} from "../services/domaine-service.service";
import {DomaineModel} from "../models/domaine.model";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  public organismes: any | OrganismeModel[];
  public formations: any | FormateurModel[];
  public deleteFormateur: any | FormateurModel;
  public editFormateur : any | FormateurModel;
  public domaines :any | DomaineModel;
  public formateursU : any =[];
  private id: any;

  constructor(private organismeService: OrganismeService, private formationsService: FormationService,
              private http: HttpClient, private route: ActivatedRoute, private router: Router,
              private domaineServcie : DomaineServiceService) {
  }

  ngOnInit(): void {
    //this.getOrganismes();
    //this.getFormateurs();
    this.getDomaines();
    this.getFormation();
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


  public getDomaines(): void {
    this.domaineServcie.getDomaines().subscribe(
      (response: OrganismeModel[]) => {
        this.domaines = response;
        console.log(this.domaines);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );


  }

  public onAddFormation(addForm: NgForm): void {
    this.formationsService.addFormation(addForm.value).subscribe(
      (response: FormateurModel) => {
        this.getFormation();
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteFormation(Formateurid: number): void {
    this.formationsService.deleteFormation(Formateurid).subscribe(
      (response: void) => {
        console.log("response");
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        window.location.reload();
      }
    );
  }

  updateNavigateFormation(formateur : FormationModel) {
    this.formations.id = formateur.id;
    this.router.navigate(['/updateFormateur/' + `${formateur.id}`]);
  }

  public getFormation(): void {
    this.formationsService.getFormations().subscribe(
      (response: FormationModel[]) => {
        this.formations = response;
        console.log(this.formationsService);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(formateur: FormateurModel, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPaysModal');
    }
    /*
   if (mode === 'edit') {
      this.editPool = pool;
      button.setAttribute('data-target', '#updatePoolModal');
    } */
    if (mode === 'delete') {
      this.deleteFormateur = FormateurModel;
      button.setAttribute('data-target', '#deleteFormateurModal');
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();
  }
}
