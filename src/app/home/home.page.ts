import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  projects = [
    { name: 'Proyecto A', image: '../assets/img/default.png' },
    { name: 'Proyecto B', image: '../assets/img/default.png' },
    { name: 'Proyecto C', image: '../assets/img/default.png' }
  ];

  constructor() { }
}
