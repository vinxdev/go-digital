import { Component } from '@angular/core';

@Component({
  selector: 'app-usercart',
  standalone: false,
  
  templateUrl: './usercart.component.html',
  styleUrl: './usercart.component.css'
})
export class UsercartComponent {

  usercart: any = [];
  selectedCurrency: string = '';
  quantity: Number = 1;


  constructor() {

   }

   ngOnInit(): void {
    this.fetch()
    console.log(this.selectedCurrency);

   }

   fetch(){
    const usercart = localStorage.getItem('loggedInUser');
    const cartdetails = usercart ? JSON.parse(usercart) : [];
 
    if(cartdetails.cart.length === 0){
      console.error('No items in the cart');
      return;
    }
    else{
      this.usercart = cartdetails.cart.map((product: any) => ({
        id: product.id,
        title: product.title,
        image: product.image,
        category: product.category,
        price:product.totalPrice,
        rating: product.rating,
      })); 
  } 
  
  const prod = JSON.parse(localStorage.getItem('products')||'[]')
  if (prod[0].currency) {
    this.selectedCurrency = prod[0].currency
  }
   }

   remove(id:any){
    const usercart = localStorage.getItem('loggedInUser');
    const cartdetails = usercart ? JSON.parse(usercart) : [];
    const index = cartdetails.cart.findIndex((product: any) => product.id === id);
    
    if (index !== -1) {
      cartdetails.cart.splice(index, 1);
      localStorage.setItem('loggedInUser', JSON.stringify(cartdetails));
      this.usercart = cartdetails.cart.map((product: any) => ({
        id: product.id,
        title: product.title,
        image: product.image,
        category: product.category,
        price:product.totalPrice,
        rating: product.rating,
        }));
        }
   }

   add(id:any){
    const usercart = localStorage.getItem('loggedInUser');
    const cartdetails = usercart ? JSON.parse(usercart) : [];
    const product = cartdetails.cart.find((product: any) => product.id === id);
    if (product) {
      product.quantity += 1;
      this.quantity = product.quantity;
      localStorage.setItem('loggedInUser', JSON.stringify(cartdetails));
      this.usercart = cartdetails.cart.map((product: any) => ({
        id: product.id,
        title: product.title,
        image: product.image,
        category: product.category,
        price:product.totalPrice,
        rating: product.rating,
        }));
        }
   }
  
}
