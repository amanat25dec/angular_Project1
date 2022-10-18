import { Component, OnInit } from '@angular/core';
import * as data from './products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  p: any;
  searchText: string = '';
  flag: boolean = true;

  constructor() {}

  product_list = (data as any).default;

  ngOnInit(): void {}

  toggle_des() {
    this.flag = !this.flag;
  }

  low_to_high() {
    this.product_list.sort((a: any, b: any) => a.price - b.price);
  }

  high_to_low() {
    this.product_list.sort((a: any, b: any) => b.price - a.price);
  }
}
