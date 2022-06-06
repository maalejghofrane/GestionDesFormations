import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormateurModel} from "../models/formateur.model";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  //apiBaseUrl: 'http://localhost:8080'
  private apiServerUrl = 'http://localhost:8090/api/test/formateurs'

  constructor(private http: HttpClient) {
  }

  public getFormateurs(): Observable<FormateurModel[]> {
    return this.http.get<FormateurModel[]>(`${this.apiServerUrl}`);
  }

  public addFormateur(formateur: FormateurModel): Observable<FormateurModel> {
    return this.http.post<FormateurModel>(`${this.apiServerUrl}`, formateur);
  }


  public deleteFormateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`);
  }

  public updateFormateur(formateur: FormateurModel): Observable<FormateurModel> {
    return this.http.put<FormateurModel>(`${this.apiServerUrl}`, formateur);
  }

}
