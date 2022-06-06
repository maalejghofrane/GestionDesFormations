import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-pays',
  templateUrl: './update-pays.component.html',
  styleUrls: ['./update-pays.component.css']
})
export class UpdatePaysComponent implements OnInit {

  private baseUrl = 'http://localhost:8090/api/test/Pays';
  pays: any = [];
  private id = 22;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.http.get('http://localhost:8090/api/test/Pays/' + `${this.id}`
    ).subscribe((pays: any) => {
        this.pays = pays;
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerForm = new FormGroup({
    id: new FormControl(""),
    nom: new FormControl("")
  });

  loadDomaineById() {

  }

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  updateDomaines(pays: any) {
    this.http.put('http://localhost:8090/api/test/updatePays', pays
    ).subscribe((response) => {
        window.location.href = "http://localhost:4200/pays";
      },
      (error => {
        alert(JSON.stringify(error))
      }));
  }

  registerSubmited() {
    this.updateDomaines(this.registerForm.value);
  }
}
