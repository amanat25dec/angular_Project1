import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['name'],
  outputs: ['myEvent'],
})
export class Child1Component implements OnInit {
  name: any;
  emp = { name: 'rahul', Age: 45, address: 'mumbai' };
  constructor() {}

  ngOnInit(): void {}

  myEvent = new EventEmitter();
  sendData() {
    this.myEvent.emit(this.emp);
  }
}
