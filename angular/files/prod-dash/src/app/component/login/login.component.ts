import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators ,FormBuilder, FormsModule} from '@angular/forms';
import { LoginModule } from '../../modules/login/login.module';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router){
    }

  signInForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  });

  onSubmit() {
    const storedData = JSON.parse(localStorage.getItem('signupData') || '[]');
    const existingUser = storedData.find((user: any) => 
      user.email === this.signInForm.value.email && 
      user.name === this.signInForm.value.name
    );
  
    if (existingUser) {
      if(!existingUser.cart)
      {
        existingUser.cart = [];
      }
      localStorage.setItem('isloggedin', 'true');
      localStorage.setItem('loggedInUser', JSON.stringify(existingUser));
      this.router.navigate(['/home']);
      alert('Login Successful');
      
    } else {
      alert('Email or username does not exist.');
    }
  }
}
