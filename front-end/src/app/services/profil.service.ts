import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8090/api/test';
  }

  // getPays(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}` + `/Pays` + `/${id}`);
  // }
  //
  // createPays(pays: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}` + `/addpays`, pays);
  // }
  //
  // updatePays(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}` + `/updatepays` + `/${id}`, value);
  // }
  //
  // deletePays(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}` + `/deletepays/${id}`, {responseType: 'text'});
  // }

  getProfils(): Observable<any> {
     return this.http.get(`${this.baseUrl}` + `/profils`);
   }
}
