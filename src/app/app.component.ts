import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items: any = [
    { name: "ajith kumar", age:23 },
    { name: "venom", age:21},
    { name: "uthira kumar" , age:24},
    { name: "vaishnavi" , age:22},
    { name: "risha" , age:25},
    { name: "suriya", age:26 },
    { name: "thala", age:27},
  ];

}