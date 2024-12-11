import { JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, JsonPipe, NgIf, NgTemplateOutlet,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  studentObj: any = {
    firstname: '',
    lastname: '',
    username: '',
    city: '',
    state: '',
    zipcode: '',
    isacceptterms: false,
  };
  formvalue: any;
  tempformvisible: boolean = false;
  modformvisible: boolean = false;
  val: boolean = true;

  // Model-driven form (Reactive form) initialization
  modelForm: FormGroup;
studentForm: any;

  constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      isacceptterms: [false, Validators.requiredTrue]
    });
  }

  onsubmit() {
    if (this.modelForm.invalid) {
      alert("Please fill in all required fields.");
    } else {
      this.formvalue = this.modelForm.value;
      console.log(this.formvalue); // You can do anything with form data here
    }
  }

  resetform() {
    this.modelForm.reset();
  }

  tem() {
    if (this.modformvisible == false) {
      this.tempformvisible = !this.tempformvisible;
    }
  }

  mod() {
    if (this.tempformvisible == false) {
      this.modformvisible = !this.modformvisible;
    } 
  }
}