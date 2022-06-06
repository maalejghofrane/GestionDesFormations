import { Component, OnInit } from '@angular/core';
import {ParticipantModel} from "../models/participant.model";
import {OrganismeModel} from "../models/organisme.model";
import {ProfilModel} from "../models/profil.model";
import {PaysModel} from "../models/pays.model";
import {ParticipantService} from "../services/participant.service";
import {OrganismeService} from "../services/organisme.service";
import {ProfilService} from "../services/profil.service";
import {PaysService} from "../services/pays.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  public participants: any|ParticipantModel[];
  public organismes: any|OrganismeModel[];
  public profils: any|ProfilModel[];
  public pays: any|PaysModel[];
  constructor(private participantService : ParticipantService, private organismeService : OrganismeService,
              private profilService: ProfilService,private paysService: PaysService) { }
  ngOnInit(): void {
    this.getParticipants();
    this.getOrganismes();
    this.getprofils();
    this.getPays();
  }


  public getprofils(): void {
    this.profilService.getProfils().subscribe(
      (response: ProfilModel[]) => {
        this.profils = response;
        console.log("Profils");
        console.log(this.profils);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getParticipants(): void {
    this.participantService.getParticipants().subscribe(
      (response: ParticipantModel[]) => {
        this.participants = response;
        console.log("participant");
        console.log(this.participants);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public getPays(): void {
    this.paysService.getPays().subscribe(
      (response: PaysModel[]) => {
        this.pays = response;
        console.log("pays");
        console.log(this.pays);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddParticipant(addForm: NgForm): void {
    this.participantService.addParticipant(addForm.value).subscribe(
      (response: ParticipantModel) => {
        this.getParticipants();
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public getOrganismes(): void {
    this.organismeService.getOrganismes().subscribe(
      (response: OrganismeModel[]) => {
        this.organismes = response;
        console.log("organismes");
        console.log(this.organismes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(participant: ParticipantModel, mode: string): void {
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
    }
    if (mode === 'delete') {
      this.deletePool = pool;
      button.setAttribute('data-target', '#deletePoolModal');
    }*/
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

}
