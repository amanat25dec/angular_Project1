import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'saChIn tEnDulKaR';
  mySal = 5000;
  today = new Date();

  user = { name: 'sachin', age: 45, add: 'mumbai' };

  messege: any = '';
  messege2: any = '';
  searchtext: any = '';

  cardinal: any = '';

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, Gender: 'male' },
    { eId: 104, name: 'rani', sal: 8000, Gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, Gender: 'male' },
    { eId: 102, name: 'sweety', sal: 9000, Gender: 'female' },
  ];

  arr = [10, 23, 78, 15, 60];
}
