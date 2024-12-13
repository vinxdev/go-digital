import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-controlcontainer',
  standalone: false,
  templateUrl: './controlcontainer.component.html',
  styleUrl: './controlcontainer.component.css',
})
export class ControlcontainerComponent {
  addressform : FormGroup

  constructor(private formBuilder:FormBuilder){
    this.addressform = this.formBuilder.group({
      name: [''],
      phone: [''],
      address: this.formBuilder.group({
        streetname: [''],
        roadnumber: ['']
      })
    })
  }

  getaddressformgroup(): FormGroup<any>{
    return this.formBuilder.group({
      streetName: [''],
      roadnumber: [''],
    }) as FormGroup;
  } 

  getaddressformgroupforchild(): FormGroup<any>{
    return this.addressform.get('address') as FormGroup
  }

  submit() {
    console.log('submitted');
    console.log(this.addressform.value);
  }
  
}
