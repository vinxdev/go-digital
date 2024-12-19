import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  dataSource: any[] = [];
  categories: any[] = [];
  file:any;

  addProduct = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    images: new FormControl('', Validators.required),
  });

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  // onFileSelected(event: any): void {
  //   const file = event.target.files;
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (typeof reader.result === 'string') {
  //         console.log(reader.result);
  //         this.addProduct.patchValue({ images: reader.result }); 
  //         console.log('Updated form value for images:', this.addProduct.get('images')?.value);
  //       }
  //     };
  //     reader.readAsDataURL(file[0]);
  //   }
  // }

onFileSelected(event:any){
    this.file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (event:any) => {
      console.log(reader.result);
      this.addProduct.patchValue({images:event.target.result})
      console.log('Updated form value for images:', this.addProduct.get('images')?.value);
      console.log('not yet');
    }
     reader.readAsDataURL(this.file)
}

  onSubmit() {
    const olddata = localStorage.getItem('products');
    let products = olddata ? JSON.parse(olddata) : [];
    const nextId = products.length > 0 ? Math.max(...products.map((product: any) => product.id)) + 1 : 1;

    const newProduct = {
      id: nextId,
      title: this.addProduct.value.title,
      price: this.addProduct.value.price,
      category: this.addProduct.value.category,
      description: this.addProduct.value.description,
      rating: this.addProduct.value.rating,
      brand: this.addProduct.value.brand,
      images: this.addProduct.value.images, 
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    this.addProduct.reset();
    alert('Product added');
    console.log('Product added to local storage:', newProduct);
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