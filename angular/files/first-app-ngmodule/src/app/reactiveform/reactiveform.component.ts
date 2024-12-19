import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      empId: new FormControl(this.empobj.empId),
      name: new FormControl(this.empobj.name,[Validators.required]),
      city: new FormControl(this.empobj.city),
      address: new FormControl(this.empobj.address,[Validators.required]),
      contactno: new FormControl(this.empobj.contactno,[Validators.required,Validators.minLength(10)]),
      emailid: new FormControl(this.empobj.emailid,[Validators.required,Validators.email]),
      pincode: new FormControl(this.empobj.pincode,[Validators.required,Validators.minLength(6)]),
      state: new FormControl(this.empobj.state),
    })
  }
  
  save(){
    const olddata = localStorage.getItem("empdata");
    if (olddata!= null) {
      const parsedata = JSON.parse(olddata);
      this.employeeform.controls['empId'].setValue(parsedata.length +1)
      this.emplist.unshift(this.employeeform.value);
    }else{
      this.emplist.unshift(this.employeeform.value);
    }
    localStorage.setItem('empdata',JSON.stringify(this.emplist))
    this.reset()
  }

  edit(item:EmployeeModel){
    this.empobj = item;
    this.createform()
  }

  delete(id:number){
   const isdelete = confirm("are you sure want to delete")
   if (isdelete){
    const index = this.emplist.findIndex(m => m.empId == id);
    this.emplist.splice(index,1)
    localStorage.setItem('empdata',JSON.stringify(this.emplist))
    }
  }

  update(){
    const record = this.emplist.find(m=>m.empId == this.employeeform.controls['empId'].value);
    if(record != undefined){
      record.name = this.employeeform.controls['name'].value;
      record.city = this.employeeform.controls['city'].value;
      record.address = this.employeeform.controls['address'].value;
      record.contactno = this.employeeform.controls['contactno'].value;
      record.emailid = this.employeeform.controls['emailid'].value;
      record.pincode = this.employeeform.controls['pincode'].value;
      record.state = this.employeeform.controls['state'].value;
      }
      localStorage.setItem('empdata',JSON.stringify(this.emplist))
      this.empobj = new EmployeeModel();
      this.createform()
    }

    reset(){
      this.employeeform.reset();
      this.empobj = new EmployeeModel();
      
    }
  }

