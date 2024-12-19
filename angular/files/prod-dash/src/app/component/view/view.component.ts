import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

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


}