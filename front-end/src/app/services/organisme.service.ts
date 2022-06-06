import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormateurModel} from "../models/formateur.model";
import {OrganismeModel} from "../models/organisme.model";
@Injectable({
  providedIn: 'root'
})
export class OrganismeService {

  private apiServerUrl ='http://localhost:8090/api/test/organisme'

  constructor(private http: HttpClient){}

  public getOrganismes(): Observable<OrganismeModel[]> {
    return this.http.get<OrganismeModel[]>(`${this.apiServerUrl}`);
  }

  public addOrganismes(organisme: OrganismeModel): Observable<OrganismeModel> {
    return this.http.post<OrganismeModel>(`${this.apiServerUrl}`, organisme);
  }

}
