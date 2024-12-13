import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-reactiveform',
  standalone: false,
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})

export class ReactiveformComponent {
  employeeform: FormGroup = new FormGroup({});
  empobj:EmployeeModel = new EmployeeModel();
  emplist:EmployeeModel[] = [];

  constructor(){
    this.createform()
    const olddata = localStorage.getItem("empdata");
    if (olddata!= null){
      const parsedata = JSON.parse(olddata);
      this.emplist = parsedata;
    }
  }

  createform(){
    this.employeeform = new FormGroup({
      empid: new FormControl(this.empobj.empId),
      name: new FormControl(this.empobj.name),
      city: new FormControl(this.empobj.city),
      address: new FormControl(this.empobj.address),
      contactno: new FormControl(this.empobj.contactno),
      emailid: new FormControl(this.empobj.emailid),
      pincode: new FormControl(this.empobj.pincode),
      state: new FormControl(this.empobj.state),
    })
  }
  save(){
    const olddata = localStorage.getItem("empdata");
    if (olddata!= null) {
      const parsedata = JSON.parse(olddata);
      this.employeeform.controls['empid'].setValue(parsedata.length +1)
      this.emplist.unshift(this.employeeform.value);
    }else{
      this.emplist.unshift(this.employeeform.value);
    }
    localStorage.setItem('empdata',JSON.stringify(this.emplist))
  }

  edit(item:EmployeeModel){
    this.empobj = item;
    this.createform()
  }

  delete(item:EmployeeModel){
    this.emplist = this.emplist.filter((emp:EmployeeModel) => emp !== item);
    const olddata = localStorage.getItem("empdata");
    const parsedata = JSON.parse(olddata);
  }
}
