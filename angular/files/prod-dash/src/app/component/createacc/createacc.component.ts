import { Component ,inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators ,FormBuilder, FormsModule} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { CreateaccModule } from '../../modules/createacc/createacc.module';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-createacc',
  standalone: false,
  templateUrl: './createacc.component.html',
  styleUrl: './createacc.component.css'
})

export class CreateaccComponent {

  constructor(private router: Router){

  }

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    num: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  });

  onSubmit() {
    if (this.signUpForm.valid) {
      if (this.emailvalid() == true || this.contactvalid() == true) {
        return
      }
      let storedData = JSON.parse(localStorage.getItem('signupData') || '[]');
      const nextId = storedData.length > 0 ? Math.max(...storedData.map((user: any) => user.id)) + 1 : 1;
      const formData = this.signUpForm.value;
      const user = { id: nextId, ...formData, cart:[] };
      if (!Array.isArray(storedData)) {
        storedData = [];
      }
      storedData.push(user);
      localStorage.setItem('signupData', JSON.stringify(storedData));
      localStorage.setItem('loggedInUser',JSON.stringify(user))
      console.log('Form submitted successfully and data saved to localStorage:', storedData);
      alert('Registration successful!');
      this.signUpForm.reset();
      this.router.navigate(['/home'])
      localStorage.setItem('isloggedin','true')
    } else {
      console.log('Form is invalid!');
    }
  }

  emailvalid() {
    const storedData = JSON.parse(localStorage.getItem('signupData') || '[]');
    if (this.signUpForm.controls['email'].value) {
      const email = this.signUpForm.controls['email'].value;
      if (storedData.some((contact: any) => contact.email === email)) {
        alert("Email already exists.");
        return true; 
      }
    }
    return false; 
  }

  contactvalid() {
    const storedData = JSON.parse(localStorage.getItem('signupData') || '[]');
    if (this.signUpForm.controls['num'].value) {
      const number = this.signUpForm.controls['num'].value;
      if (storedData.some((contact: any) => contact.num === number)) {
        alert("Number already exists.");
        return true; 
      }
    }
    return false; 
  }


}

