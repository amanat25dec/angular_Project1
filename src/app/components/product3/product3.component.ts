import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css'],
})
export class Product3Component implements OnInit {
  constructor(private httpClient: HttpClient) {}
  products: any;
  ngOnInit(): void {
    const url = 'https://dummyjson.com/products';

    this.httpClient.get(url).subscribe((res: any) => {
      console.log(res);
      this.products = res.products;
    });
  }
}
