import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})

export class UpdateComponent {

  productId: number | null = null;
  proddetails: any = [];
  categories: any = [];
  currency = ['$','₹','€'];

constructor(private apiService : ApiService,private route: ActivatedRoute){ }
updateProduct = new FormGroup({
  id: new FormControl('', Validators.required),
  title: new FormControl('', Validators.required),
  price: new FormControl('', {validators: [Validators.required, Validators.min(0.5)]}),
  category: new FormControl('', Validators.required),
  description: new FormControl('',{validators: [Validators.required, Validators.maxLength(200)]}),
  rating: new FormControl('',{validators: [Validators.required, Validators.min(1),Validators.max(10)]}),
  brand: new FormControl('', {validators: [Validators.required, Validators.maxLength(20)]}),
  images: new FormControl('', Validators.required),
  stock: new FormControl('', {validators: [Validators.required, Validators.min(1)]}),
})
  
ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const id = params.get('id');
    this.productId = id ? Number(id) : null;
    if (this.productId) {
      this.fetchProductDetails(this.productId);
    } else {
      console.error('Invalid or undefined product ID.');
    }
  });
  this.fetchCategories();
}

fetchProductDetails(id: number) {
  const products = localStorage.getItem('products');
  if (products) {
    const parsedProducts = JSON.parse(products);
    const product = parsedProducts.find((p: any) => p.id === id);
    if (product) {
      console.log('Product Details:', product);
      this.updateProduct.patchValue({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        rating: product.rating,
        description: product.description,
        brand: product.brand,
        images: product.images, 
        stock: product.stock,
      });
    } else {
      console.error('Product not found in localStorage.');
    }
  } else {
    console.error('No products found in localStorage.');
  }
}

onSubmit(){
    if (this.updateProduct.valid && this.productId != null) {
      const products = localStorage.getItem('products');
      if (products) {
        const parsedProducts = JSON.parse(products);
        const productIndex = parsedProducts.findIndex((p: any) => p.id === this.productId);
        if (productIndex > -1) {
          parsedProducts[productIndex] = {
            ...parsedProducts[productIndex],
            ...this.updateProduct.value, 
          };
          localStorage.setItem('products', JSON.stringify(parsedProducts));
          alert('Product details updated successfully in localStorage.');
          console.log('Updated product list:', parsedProducts);
        } else {
          console.error('Product not found for update.');
        }
      } else {
        console.error('No products found in localStorage.');
      }
    } else {
      console.error('Form is invalid or product ID is null.');
    }
  }

  ratingChanged(event:any){
    this.updateProduct.patchValue({rating: event.target.value});
    console.log('Updated form value for rating:', this.updateProduct.get('rating')?.value);
  }
  

fetchCategories() {
  this.apiService.getAllProducts().subscribe(
    (result: any) => {
      this.categories = [...new Set(result.products.map((x: any) => x.category))];
      console.log('Categories fetched:', this.categories); 
    },
    (error) => {
      console.error('Error fetching categories:', error);
    }
  );
}


}
