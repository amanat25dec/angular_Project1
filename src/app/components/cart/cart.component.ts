import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartServicec: CartService) {}

  cartItems: any[] = [];

  ngOnInit(): void {
    this.cartServicec.getCartItem().subscribe((item) => {
      if (item) {
        this.cartItems.push(item);
      } else {
        this.cartItems = [];
      }
    });
  }

  clearItem() {
    this.cartServicec.clearCart();
  }
}
