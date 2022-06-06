import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ParticipantModel} from "../models/participant.model";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private apiServerUrl ='http://localhost:8090/api/test/participant'

  constructor(private http: HttpClient){}

  public getParticipants(): Observable<ParticipantModel[]> {
    return this.http.get<ParticipantModel[]>(`${this.apiServerUrl}`);
  }

  public addParticipant(participant: ParticipantModel): Observable<ParticipantModel> {
    return this.http.post<ParticipantModel>(`${this.apiServerUrl}`, participant);
  }}
