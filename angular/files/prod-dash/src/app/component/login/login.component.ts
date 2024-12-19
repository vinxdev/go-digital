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
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    const storedData = JSON.parse(localStorage.getItem('signupData') || '[]');
    const existingEmail = storedData.find((user:any) => user.email === this.signInForm.value.email);
    const existingName = storedData.find((user:any) => user.name === this.signInForm.value.name);
    if (existingEmail && existingName) {
      this.router.navigate(['/home']);
      alert('Login Successful');
      } else {
        alert('Email or username does not exists ');
        }
  }
}
