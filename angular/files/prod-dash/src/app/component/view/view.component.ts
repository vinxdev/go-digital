import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})

export class ViewComponent implements OnInit {
  productId: number | null = null;
  productDetails: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const id = params.get('id');
    // console.log('Extracted ID:', id); 
    this.productId = id ? Number(id) : null;
    if (this.productId) {
      this.fetchProductDetails(this.productId);
    } else {
      console.error('Invalid or undefined product ID.');
    }
  });
  this.startSlideshow();
  }

  currentIndex: number = 0;
  intervalId: any; 

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.productDetails.images.length;
    }, 1000); 
  }

  fetchProductDetails(id: number) {
    const storedData = localStorage.getItem('products');
    console.log(storedData);
    if (!storedData) {
      console.error('No products found in localStorage.');
      return;
    }
    const products = JSON.parse(storedData)|| []; 
    this.productDetails = products.find((product: any) => Number(product.id) === id);
    if (!this.productDetails) {
      console.error('Product not found for ID:', id);
    } else {
      console.log('Product Details:', this.productDetails);
    }
    
  }

  cart(id:number){
    console.log(id);
    this.router.navigate([`/cart/${id}`])
    console.log('clicked');

  }

}