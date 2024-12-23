import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardetailsService {

  constructor() { }

  getUserData(): Array<{ id: number; name: string; email: string; num: string }> {
    const data = JSON.parse(localStorage.getItem('signupData') || '[]');
    return data
  }

  addToCart(product: any) {
    const cart = this.getCartData();
    cart.push(product);
    localStorage.setItem('cartData', JSON.stringify(cart));
  }

  getCartData(): any[] {
    return JSON.parse(localStorage.getItem('cartData') || '[]');
  }
  
}
