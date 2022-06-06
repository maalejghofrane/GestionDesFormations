import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-domaine',
  templateUrl: './update-domaine.component.html',
  styleUrls: ['./update-domaine.component.css']
})
export class UpdateDomaineComponent implements OnInit {
  private baseUrl = 'http://localhost:8090/api/test/domaine';
  domaines: any = [];
  private id = 22;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.http.get('http://localhost:8090/api/test/domainee/'+`${this.id}`
    ).subscribe((domaines: any) => {
        this.domaines = domaines;
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerForm = new FormGroup({
    id: new FormControl(""),
    libelle: new FormControl("")
  });

loadDomaineById()  {

}
  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  updateDomaines(domaine: any) {
    this.http.put('http://localhost:8090/api/test/domaine', domaine
    ).subscribe((response) => {
        window.location.href = "http://localhost:4200/";
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerSubmited() {
    this.updateDomaines(this.registerForm.value);
  }
}
