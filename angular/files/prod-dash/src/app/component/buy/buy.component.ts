import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy',
  standalone: false,
  
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
buydetails:any
selectedQuantity:number = 1; 
buyid: number | null = null;
userdata:any

  constructor(private route: ActivatedRoute, private apiService: ApiService,private fb: FormBuilder, private router: Router) { 
    this.userdata = this.fb.group({
      name:['',Validators.required],
      street:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',[Validators.required,Validators.minLength(6),Validators.pattern('^[0-9]*$')]],
      country:['',Validators.required]
    })
  }

 
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id'); 
      this.buyid = id ? Number(id) : null;
      if (this.buyid) {
        this.getBuyDetails(this.buyid);
      } else {
        console.error('Invalid or undefined product ID.');
      }
    });
    const user = localStorage.getItem('loggedInUser');
    const userdetails = user? JSON.parse(user):{};
    this.userdata.patchValue({
      name: userdetails.name
    });
  }

  zipvalid(pincode: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService.getpincode(pincode).subscribe(
        (data: any) => {
          resolve(data[0].Status === 'Success');
        },
        (error) => {
          resolve(false); 
        }
      );
    });
  }
  
  async onSubmit(): Promise<void> {
    if (this.userdata.invalid) {
      alert('Please enter valid details and all fields are mandatory.');
      return;
    }
    const isPinValid = await this.zipvalid(this.userdata.value.pincode);
    if (isPinValid) {
      console.log('User  Details:', this.userdata.value);
      alert('Order Placed Successfully');
      this.userdata.reset();
      this.router.navigate(['/home']);
    } 
    else {
      alert('Invalid pincode. Please enter a valid pincode.');
      this.userdata.patchValue({ pincode: '' });
    }
  }

  getBuyDetails(id:number): void {
    const storedData = localStorage.getItem('products');
    console.log(storedData);
    if (!storedData) {
      console.error('No products found in localStorage.');
      return;
    }
    const products = JSON.parse(storedData) || [];
    this.buydetails = products.find((product: any) => Number(product.id) === id);
    if (!this.buydetails) {
      console.error('Product not found for ID:', id);
    } else {
      console.log('Product Details:', this.buydetails);
    }
  }

  cart(id:number){
    this.router.navigate([`/usercart`]);
  }


}
