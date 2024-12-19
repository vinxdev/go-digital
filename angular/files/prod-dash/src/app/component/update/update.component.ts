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

constructor(private apiService : ApiService,private route: ActivatedRoute){ }
updateProduct = new FormGroup({
  title: new FormControl('', Validators.required),
  price: new FormControl('', Validators.required),
  category: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
  // image: new FormControl('', Validators.required),
  rating: new FormControl('', Validators.required),
  brand : new FormControl('', Validators.required),
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

fetchProductDetails(id:number){
  this.apiService.getProductById(id).subscribe(
    (product) => {
      console.log('Product Details:', this.updateProduct);
      this.updateProduct.patchValue({
        title: product.title,
        price: product.price,
        category: product.category,
        rating: product.rating,
        description: product.description,
        brand: product.brand,
      })
    },
    (error) => {
      console.error('Error fetching product details:', error);
    }
  );
}

onSubmit(){
  if (this.updateProduct.valid && this.productId != null) {
    this.apiService.putProductById(this.productId,this.updateProduct.value).subscribe(
      (res)=>{
        console.log("updated data",res)
        alert("Details updated")
      },
      (error)=>console.log("eror",error)
    )
  }
  
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
