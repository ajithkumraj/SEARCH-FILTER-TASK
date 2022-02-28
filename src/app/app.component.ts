import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items: string[] = [
    { name: "ajith kumar" },
    { name: "venom" },
    { name: "uthira kumar" },
    { name: "vaishnavi" },
    { name: "risha" },
    { name: "suriya" },
    { name: "thala" },
  ];

}