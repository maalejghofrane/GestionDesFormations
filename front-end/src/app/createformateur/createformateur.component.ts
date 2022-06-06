import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormateurModel} from "../models/formateur.model";
import {OrganismeModel} from "../models/organisme.model";

import {FormateurService} from "../services/formateur.service";
import {OrganismeService} from "../services/organisme.service";

@Component({
  selector: 'app-createformateur',
  templateUrl: './createformateur.component.html',
  styleUrls: ['./createformateur.component.css']
})
export class CreateformateurComponent implements OnInit {
  public organismes: any | OrganismeModel[];
  public formateurs: any | FormateurModel[];
  public deleteFormateur: any | FormateurModel;
  public editFormateur : any | FormateurModel;
  public formateursU : any =[];
  private id: any;

  constructor(private organismeService: OrganismeService, private formateurService: FormateurService,
              private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getOrganismes();
    this.getFormateurs(); }
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

  public onAddFormateur(addForm: NgForm): void {
    this.formateurService.addFormateur(addForm.value).subscribe(
      (response: FormateurModel) => {
        this.getFormateurs();
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteFormateur(Formateurid: number): void {
    this.formateurService.deleteFormateur(Formateurid).subscribe(
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

  updateNavigateFormateur(formateur : FormateurModel) {
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


//   private baseUrl = 'http://localhost:8090/api/test/domaine';
//
//   formateurForm = new FormGroup({
//     nom: new FormControl("", Validators.required),
//     prenom: new FormControl("", Validators.required),
//     tel: new FormControl("", Validators.required),
//
//   });
//
// // formateur : any = FormateurModel;
//   domaines: any = [];
//   formateur:any =[];
//
//   css: object | undefined;
//
//   constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) {
//     this.loadDomaines();
//   }
//
//   loadDomaines() {
//     this.http.get("http://localhost:8090/api/test/domaines").subscribe((domaines: any) => {
//       this.domaines = domaines;
//     })
//   }
//
//
//   createFormateur(formateur: any
//   ) {
//     this.http.post('http://localhost:8090/api/test/formateurs', formateur
//     ).subscribe((response) => {
//         window.location.href = "http://localhost:4200";
//       },
//       (error => {
//         alert(JSON.stringify(error))
//       }));
//   }
//
//   ngOnInit() {
//     this.formateurForm = this.fb.group({
//       country: [null]
//     });
//   }
//
//   submit() {
//     this.createFormateur(this.formateurForm.value);
//     console.log(this.formateurForm.value); }

}
