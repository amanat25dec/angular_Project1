import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartItems = new Subject();

  addItemToCart(cartItem: any) {
    this.cartItems.next(cartItem);
  }

  clearCart() {
    this.cartItems.next(null);
  }

  getCartItem(): Observable<any> {
    return this.cartItems.asObservable();
  }
}
