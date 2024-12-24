import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgModel } from '@angular/forms';
import { PricePipe } from './price.pipe';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent{
  productId: number | null = null;
  cartdetails: any;
  selectedQuantity: number = 1; 
  selectedCountry: string = 'a';
  convertedPrice:number = 0;
  countries = [
    { name: 'United States', code: 'USA', symbol: '$' },
    { name: 'Europe', code: 'EUR', symbol: '€' },
    { name: 'India', code: 'INR', symbol: '₹' },
  ];
 
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      // console.log('Extracted ID:', id); 
      this.productId = id ? Number(id) : null;
      if (this.productId) {
        this.fetchcartdetails(this.productId);
      } else {
        console.error('Invalid or undefined product ID.');
      }
    });
    this.convertCurrency()
  }

 convertCurrency(): void {
 
}


  fetchcartdetails(id: number) {
    const storedData = localStorage.getItem('products');
    console.log(storedData);
    if (!storedData) {
      console.error('No products found in localStorage.');
      return;
    }
    const products = JSON.parse(storedData)|| []; 
    this.cartdetails = products.find((product: any) => Number(product.id) === id);
    this.selectedCountry = this.cartdetails.currency
    if (!this.cartdetails) {
      console.error('Product not found for ID:', id);
    } else {
      console.log('Product Details:', this.cartdetails);
    }
  }

  addtocart(product: any) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const signupData = JSON.parse(localStorage.getItem('signupData') || '[]');
    if (!loggedInUser || !loggedInUser.id) {
      alert('Please log in to proceed!');
      return;
    }

    if (!this.selectedQuantity) {
      alert('Please select a quantity!');
      return;
    }

    if(this.selectedQuantity>this.cartdetails.stock){
      alert('Out of stock!');
      return;
    }
  
    const cartItem = {
      name: this.cartdetails.title,
      quantity: this.selectedQuantity,
      totalPrice: product.price * this.selectedQuantity + 10,
    };
  
    if (!loggedInUser.cart) {
      loggedInUser.cart = [];
    }
    const productExists = loggedInUser.cart.find((item: any) => item.name === cartItem.name);
    if (productExists) {
      alert('Product already exists in your cart!');
    } else {
      loggedInUser.cart.push(cartItem);
      alert('Product added to cart!');

    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    const userIndex = signupData.findIndex((user: any) => user.id === loggedInUser.id);
    if (userIndex !== -1) {
      signupData[userIndex].cart = loggedInUser.cart;
      localStorage.setItem('signupData', JSON.stringify(signupData));
    }
  
    if (this.selectedQuantity > 0) {
      const storedData = localStorage.getItem('products');
      if (storedData) {
        const products = JSON.parse(storedData) || [];
        const productIndex = products.findIndex((p: any) => p.id === this.cartdetails.id);
        if (productIndex !== -1 && products[productIndex].stock !== -1) {
          products[productIndex].stock -= this.selectedQuantity;
          localStorage.setItem('products', JSON.stringify(products));
          this.cartdetails.stock = products[productIndex].stock; 
        }
      }
    }
    }
    this.fetchcartdetails(this.productId!); 
    console.log('Updated Cart:', loggedInUser.cart);
  }
}
