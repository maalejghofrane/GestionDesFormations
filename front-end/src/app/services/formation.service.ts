import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormateurModel} from "../models/formateur.model";
import {FormationModel} from "../models/formation.model";

@Injectable({
  providedIn: 'root'
})
export class FormationService {


  //apiBaseUrl: 'http://localhost:8080'
  private apiServerUrl = 'http://localhost:8090/api/test/formation'

  constructor(private http: HttpClient) {
  }

  public getFormations(): Observable<FormationModel[]> {
    return this.http.get<FormationModel[]>(`${this.apiServerUrl}`);
  }

  public addFormation(formation: FormateurModel): Observable<FormateurModel> {
    return this.http.post<FormateurModel>(`${this.apiServerUrl}`, formation);
  }


  public deleteFormation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`);
  }

  public updateFormation(formation: FormationModel): Observable<FormationModel> {
    return this.http.put<FormationModel>(`${this.apiServerUrl}`, formation);
  }

}
