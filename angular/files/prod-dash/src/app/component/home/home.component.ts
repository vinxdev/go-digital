import { HttpClient } from '@angular/common/http';
import { Component, viewChild } from '@angular/core';
import { HomeModule } from '../../modules/home/home.module';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import {ChangeDetectionStrategy} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  displayedColumns: string[] = ['title', 'category', 'price', 'rating', 'action', 'select'];
  dataSource: any[] = [];
  categories: any[] = [];
  productname: any;
  checked : boolean = false;
  selection: { [key: number]: boolean } = {};


  constructor(private router: Router, private apiService: ApiService,) {}

  getAllProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    if (storedProducts.length > 0) {
      this.dataSource = storedProducts.map((product: any) => ({
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        rating: product.rating,
      }));
      this.categories = [...new Set(storedProducts.map((x: any) => x.category))];
      console.log('products from local storage:', this.dataSource);
    }
    // } else {
    //   this.apiService.getAllProducts().subscribe(
    //     (result: any) => {
    //       localStorage.setItem('Productlist', JSON.stringify(result.products));
    //       this.dataSource = result.products.map((product: any) => ({
    //         id: product.id,
    //         title: product.title,
    //         category: product.category,
    //         price: product.price,
    //         rating: product.rating,
    //       }));
    //       console.log('Fetched products from api:', this.dataSource);
    //     },
    //     (error) => {
    //       console.error('Error fetching products:', error);
    //     }
    //   );
    // }
  }

  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.selection);
  }

  isAllSelected(): boolean {
    const numSelected = Object.values(this.selection).filter((selected) => selected).length;
    return numSelected === this.dataSource.length;
  }
  
  toggleAllRows(event: any): void {
    const isChecked = event.checked;
    this.dataSource.forEach((row: any) => {
      this.selection[row.id] = isChecked;
    });
  }

  toggleRow(rowId: number): void {
    this.selection[rowId] = !this.selection[rowId];
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
        name: product.title,
        quantity: 1, 
        totalPrice: product.price * 1 + 10,
      };
      if (!loggedInUser.cart.some((item: any) => item.name === cartItem.name)) {
        loggedInUser.cart.push(cartItem);
      }
    });
  
    alert('Selected products added to cart!');
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    const userIndex = signupData.findIndex((user: any) => user.id === loggedInUser.id);
    if (userIndex !== -1) {
      signupData[userIndex].cart = loggedInUser.cart;
      localStorage.setItem('signupData', JSON.stringify(signupData));
    }
    console.log('Updated Cart:', loggedInUser.cart);
  }

  bulkDeleteFromCart(): void {
   
}

  getcat(item: any) {
    console.log(item);
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    if (storedProducts.length > 0) {
      this.dataSource = storedProducts.filter((product: any) => product.category === item);
      console.log(this.dataSource);
    } else {
      console.log('No products found in localStorage.');
    }
  }

  viewProduct(id:number){
    console.log(id);
    this.router.navigate([`/view/${id}`])
  }

  addProduct(){
    this.router.navigate(['/add'])
  }

  update(id:number){
    this.router.navigate([`/update/${id}`])
  }
  
  del(id: number) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) {
      return; 
    }
    const oldData = localStorage.getItem('products');
    let products = oldData ? JSON.parse(oldData) : [];
    const updatedProducts = products.filter((product: any) => product.id !== id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    this.dataSource=updatedProducts
    alert('Product deleted successfully!');
    console.log('Updated Product List:', updatedProducts);
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

    //const prod = [...this.dataSource.map((a)=>a.title)]
    // this.dataSource = prod

    // this.apiService.searchProduct(this.productname).subscribe(
    //   (res:any) => {
    //     console.log(res);
    //     this.dataSource = res.products.map((product: any) => ({
    //       id: product.id,
    //       title: product.title,
    //       category: product.category,
    //       price: product.price,
    //       rating: product.rating,
    //     }));
    //     },
    //     (error) => {
    //       console.log("error fetching search result",error)
    //       }
    // )


asc() {
  const ascending = [...this.dataSource.sort((a, b) => a.title.localeCompare(b.title))];
  this.dataSource = ascending;
}

dsc() {
  const descending = [...this.dataSource.sort((a, b) => b.title.localeCompare(a.title))];
  this.dataSource = descending;
}
  priceH(){
    const priceHigh = [...this.dataSource.sort((a,b)=>b.price - a.price)]
    this.dataSource = priceHigh
  }

  priceL(){
    const priceLow = [...this.dataSource.sort((a,b)=>a.price - b.price)]
    this.dataSource = priceLow
  }

  ratingH(){
    const ratingHigh = [...this.dataSource.sort((a,b)=>b.rating - a.rating)]
    this.dataSource = ratingHigh
  }

  ratingL(){
    const ratingLow = [...this.dataSource.sort((a,b)=>a.rating - b.rating)]
    this.dataSource = ratingLow
  }

}

