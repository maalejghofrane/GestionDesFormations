import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrganismeModel} from "../models/organisme.model";
import {DomaineModel} from "../models/domaine.model";

@Injectable({
  providedIn: 'root'
})
export class DomaineServiceService {
  private apiServerUrl ='http://localhost:8090/api/test/domaines'

  constructor(private http: HttpClient){}

  public getDomaines(): Observable<DomaineModel[]> {
    return this.http.get<DomaineModel[]>(`${this.apiServerUrl}`);
  }

  public addDomaine(domaine: DomaineModel): Observable<DomaineModel> {
    return this.http.post<DomaineModel>(`${this.apiServerUrl}`, domaine);
  }
}
