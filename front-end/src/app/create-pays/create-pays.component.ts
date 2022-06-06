import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-pays',
  templateUrl: './create-pays.component.html',
  styleUrls: ['./create-pays.component.css']
})
export class CreatePaysComponent implements OnInit {
  private baseUrl = 'http://localhost:8090/api/test/Pays';
  pays: any = [];
  id = 144;
  nom = "";
  params: any;
  filter$: Observable<string> | undefined;

  ngOnInit(): void {

  }

  registerForm = new FormGroup({
    id: new FormControl(""),
    nom: new FormControl("")
  });

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  createDomaines(pays: any
  ) {
    this.http.post('http://localhost:8090/api/test/Pays', pays
    ).subscribe((response) => {
        window.location.href = "http://localhost:4200/pays";
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerSubmited() {
    this.createDomaines(this.registerForm.value);
  }

}
