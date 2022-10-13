import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  name: string = 'M.S Dhoni';

  flag: boolean = false;
  show_hide: boolean = false;
  ischeck: boolean = false;

  state_name: string = '';

  num1: number = 0;
  num2: number = 0;

  message: string = '';

  counter = 0;

  addition_value: any = '';

  wallpaper_img: any =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCjHYhrksXwIZZwZJlx1jk2JBIcH10v7LZw&usqp=CAU';

  ngOnInit(): void {}

  f1(msg: any) {
    console.log('f1 called................!', msg);
    alert(msg);
  }

  updatedata() {
    this.show_hide = !this.show_hide;
  }

  togglepassword() {
    this.ischeck = !this.ischeck;
  }
  increase() {
    this.counter = this.counter + 1;
  }
  decrease() {
    this.counter = this.counter - 1;
  }
  addition(value1: any, value2: any) {
    this.addition_value = +value1 + +value2;
  }
}
