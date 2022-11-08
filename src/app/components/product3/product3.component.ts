import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css'],
})
export class Product3Component implements OnInit {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}
  products: any;

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res: any) => {
      this.products = res.products;
    });
  }

  addToCart(product: any) {
    this.cartService.addItemToCart(product);
  }
}
