import {Component, OnInit} from '@angular/core';
import {OrganismeModel} from "../models/organisme.model";
import {FormateurModel} from "../models/formateur.model";
import {OrganismeService} from "../services/organisme.service";
import {FormateurService} from "../services/formateur.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {FormationService} from "../services/formation.service";
import {SessionFormationService} from "../services/session-formation.service";
import {SessionFormationModel} from "../models/sessionFormation.model";
import {FormationModel} from "../models/formation.model";

@Component({
  selector: 'app-session-formation',
  templateUrl: './session-formation.component.html',
  styleUrls: ['./session-formation.component.css']
})
export class SessionFormationComponent implements OnInit {
  public organismes: any | OrganismeModel[];
  public formateurs: any | FormateurModel[];
  public formations: any | FormateurModel[];
  public sessionsFormations: any | FormateurModel[];
  public deleteFormateur: any | FormateurModel;
  public editFormateur: any | FormateurModel;
  public formateursU: any = [];
  private id: any;

  constructor(private organismeService: OrganismeService, private formateurService: FormateurService,
              private formationService: FormationService, private sessionForamtionService: SessionFormationService,
              private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getOrganismes();
    this.getFormateurs();
    this.getFormation();
    this.getSessionFormations();
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
  public getFormation(): void {
      this.formationService.getFormations().subscribe(
        (response: FormationModel[]) => {
          this.formations = response;
          console.log(this.formations);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

  }

  public getSessionFormations(): void {
    this.sessionForamtionService.getSessionFormations().subscribe(
      (response: SessionFormationModel[]) => {
        this.sessionsFormations = response;
        console.log(this.sessionsFormations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }


  public onAddSessionFormation(addForm: NgForm): void {
    this.sessionsFormations.addSessionFormation(addForm.value).subscribe(
      (response: SessionFormationModel) => {
        this.getFormateurs();
        this.getOrganismes();
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

  public onDeleteSessionformation(Formateurid: number): void {
    this.sessionsFormations.deleteSessionFormation(Formateurid).subscribe(
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

  updateNavigateFormateur(formateur: FormateurModel) {
    this.formateurs.id = formateur.id;
    this.router.navigate(['/updateFormateur/' + `${formateur.id}`]);
  }

  public getFormateurs(): void {
    this.formateurService.getFormateurs().subscribe(
      (response: FormateurModel[]) => {
        this.formateurs = response;
        console.log(this.formateurs);
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
