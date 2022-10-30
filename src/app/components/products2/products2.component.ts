import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css'],
})
export class Products2Component implements OnInit {
  constructor(private productService: ProductService) {}
  products: any[] = [];
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
