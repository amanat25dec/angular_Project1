import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
})
export class ParentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'M.S. Dhoni';

  myEmpData: any;
  getData(emp: any) {
    this.myEmpData = emp;
  }
}
