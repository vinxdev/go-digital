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

  displayedColumns: string[] = ['title', 'category', 'price', 'rating', 'action'];
  dataSource: any[] = [];
  categories: any[] = [];
  productname: any;

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
    } else {
      this.apiService.getAllProducts().subscribe(
        (result: any) => {
          localStorage.setItem('products', JSON.stringify(result.products));
          this.dataSource = result.products.map((product: any) => ({
            id: product.id,
            title: product.title,
            category: product.category,
            price: product.price,
            rating: product.rating,
          }));
          this.categories = [...new Set(result.products.map((x: any) => x.category))];
          console.log('Fetched products from api:', this.dataSource);
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getcat(item:any){
    console.log(item);
    this.apiService.filterProduct(item).subscribe(
      (result: any) => {
        this.dataSource = result.products.map((product: any) => ({
          id: product.id,
          title: product.title,
          category: product.category,
          price: product.price,
          rating: product.rating,
        }));
        console.log(this.dataSource); 
      },
      (error)=>{
        console.log("error fetching details",error)
      }
    )
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
  
  del(id:number){
    this.apiService.delProduct(id).subscribe(
      (result: any) => {
        console.log('product deleted: ',result);
        },
      ),
    alert("Are you sure you want to delete")
  }

  getSearchResult(){
    console.log(this.productname);
    this.apiService.searchProduct(this.productname).subscribe(
      (res:any) => {
        console.log(res);
        this.dataSource = res.products.map((product: any) => ({
          id: product.id,
          title: product.title,
          category: product.category,
          price: product.price,
          rating: product.rating,
        }));
        },
        (error) => {
          console.log("error fetching search result",error)
          }
    )
  };

}

