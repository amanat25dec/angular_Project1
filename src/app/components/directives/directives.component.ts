import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  n = 5;

  today_is = new Date().getDay();

  cars = ['maruti', 'skoda', 'hundai', 'honda', 'tata'];

  state_name = ['Bihar', 'Jharkhand', 'bengal', 'gujarat', 'maharastra', 'up'];

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 },
    { eId: 104, name: 'deepak', sal: 8000 },
    { eId: 103, name: 'ranjan', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];

  ngOnInit(): void {}
}
