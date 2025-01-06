import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})

export class DialogComponent {
  displayedColumns: string[] = ['title', 'category', 'price', 'rating','select']; 
  dataSource: any[] = [];
  selection: { [key: number]: boolean } = {};
  selectedCountry: string = '';
  productname: any;

  constructor(private api: ApiService){

  }

  getAllProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    if (storedProducts.length > 0) {
      this.dataSource = storedProducts.map((product: any) => ({
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        original_price: product.price,
        rating: product.rating,
        image: product.images,
        stock : product.stock,
      }));
      if (loggedInUser && loggedInUser.cart && Array.isArray(loggedInUser.cart)) {
        this.dataSource = this.dataSource.filter((product: any) =>
          !loggedInUser.cart.some((cartItem: any) => cartItem.id === product.id)
        );
      }
    } else {
      console.log("No products found in localStorage.");
    }
  }
  
  getSearchResult(){
    console.log(this.productname);
      const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
      if (storedProducts.length > 0) {
        this.dataSource = storedProducts.filter((product: any) =>
          product.title.toLowerCase().includes(this.productname.toLowerCase())
        );
        console.log("Filtered products:", this.dataSource);
      } else {
        console.log("No products found in localStorage.");
      }
    };


  ngOnInit(): void {
    this.getAllProducts();
  }
  
  isAllSelected(): boolean {
    const numSelected = Object.values(this.selection).filter((selected) => selected).length;
    return numSelected === this.dataSource.length;
  }
  
  toggleAllRows(event: any): void {
    const isChecked = event.checked;
    this.dataSource.forEach((row: any) => {
      this.selection[row.id] = isChecked;
      console.log(this.selection);
    });
  }

  toggleRow(rowId: number): void {
    this.selection[rowId] = !this.selection[rowId];
    console.log("row",this.selection);
  }
  
  bulkAddToCart(): void {
    const selectedProducts = this.dataSource.filter((product: any) => {
      console.log(`Product ID: ${product.id}, Selected: ${this.selection[product.id]}`);
      return this.selection[product.id];
    });
    if (selectedProducts.length === 0) {
      alert('No products selected!');
      return;
    }
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const signupData = JSON.parse(localStorage.getItem('signupData') || '[]');
    if (!loggedInUser || !loggedInUser.id) {
      alert('Please log in to proceed!');
      return;
    }
    loggedInUser.cart = loggedInUser.cart || [];
    selectedProducts.forEach((product: any) => {
      const cartItem = {
        id: product.id,
        title: product.title,
        quantity: product.stock,
        totalPrice: product.price,
        image: product.image,
        category: product.category,
      };
      if(cartItem.quantity <= 0){
        alert('Product is tempariorly out of stock!');
        return;
      }
      if (!loggedInUser.cart.some((item: any) => item.title === cartItem.title)) {
        loggedInUser.cart.push(cartItem);
        alert(`${selectedProducts.length} products added to cart!`);
      }
      else{
       alert(`${cartItem.title} product already exists in cart`);
       return;
      }
      console.log(cartItem.quantity);
    });
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    const userIndex = signupData.findIndex((user: any) => user.id === loggedInUser.id);
    if (userIndex !== -1) {
      signupData[userIndex].cart = loggedInUser.cart;
      localStorage.setItem('signupData', JSON.stringify(signupData));
    }
    console.log('Updated Cart:', loggedInUser.cart);
   
  }


  bulkDeleteFromCart(): void {
    const selectedProducts = this.dataSource.filter((product: any) => {
      console.log(`Product ID: ${product.id}, Selected: ${this.selection[product.id]}`);
      return this.selection[product.id];
    })
    if (selectedProducts.length === 0) {
      alert('No products selected!');
      return;
    }
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const signupData = JSON.parse(localStorage.getItem('signupData') || '[]');
    if (!loggedInUser || !loggedInUser.id) {
      alert('Please log in to proceed!');
      return;
    }
    loggedInUser.cart = loggedInUser.cart || [];
    selectedProducts.forEach((product: any) => {
      loggedInUser.cart = loggedInUser.cart.filter((item: any) => item.title !== product.title);
    });
    alert(`${selectedProducts.length} products removed from cart!`);
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    const userIndex = signupData.findIndex((user: any) => user.id === loggedInUser.id);
    if (userIndex !== -1) {
      signupData[userIndex].cart = loggedInUser.cart;
      localStorage.setItem('signupData', JSON.stringify(signupData));
    }
    console.log('Updated Cart:', loggedInUser.cart);
  }


}
