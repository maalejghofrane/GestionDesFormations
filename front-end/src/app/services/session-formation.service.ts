import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormateurModel} from "../models/formateur.model";
import {SessionFormationModel} from "../models/sessionFormation.model";

@Injectable({
  providedIn: 'root'
})
export class SessionFormationService {


  //apiBaseUrl: 'http://localhost:8080'
  private apiServerUrl = 'http://localhost:8090/api/test/sessionformation'

  constructor(private http: HttpClient) {
  }

  public getSessionFormations(): Observable<SessionFormationModel[]> {
    return this.http.get<SessionFormationModel[]>(`${this.apiServerUrl}`);
  }

  public addSessionFormation(sessionFormation: SessionFormationModel): Observable<SessionFormationModel> {
    return this.http.post<SessionFormationModel>(`${this.apiServerUrl}`, sessionFormation);
  }


  public deleteSessionFormation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`);
  }

  public updateFormateur(sessionFormation: FormateurModel): Observable<SessionFormationModel> {
    return this.http.put<SessionFormationModel>(`${this.apiServerUrl}`, sessionFormation);
  }
}
