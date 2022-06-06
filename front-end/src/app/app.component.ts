import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  age: any;
  user: any ;
  address: any; 
  getValues(val: any) {
    console.warn(val);
  }
}
