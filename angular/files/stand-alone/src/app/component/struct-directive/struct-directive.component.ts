import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-struct-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './struct-directive.component.html',
  styleUrl: './struct-directive.component.css'
})
export class StructDirectiveComponent {
  // structural component
  num1:string="";
  num2:string="";
  isactive:boolean=true;
  isdiv1visible: boolean = true;
  iddiv2visible:boolean = true;
  listofstr :string[] = ["mark","steve","merry","allen","josh"];
  showdiv1(){
    this.isdiv1visible=true;
  }
  hidediv1(){
    this.isdiv1visible=false;
  }
  toggle(){
    this.iddiv2visible = !this.iddiv2visible
  }

  // attribute component

  div1bgcolor : string = "bg-primary";
  isdev2active: boolean = false;
  studentlist : any[] = [
    { studendid:1 , name: 'John Doe', city: 'New York', isactive: true, gender: 'Male', totalmarks: 85 },
    { studendid:2 ,name: 'Jane Smith', city: 'Los Angeles', isactive: false, gender: 'Female', totalmarks: 92 },
    { studendid:3 ,name: 'Sam Wilson', city: 'Chicago', isactive: true, gender: 'Male', totalmarks: 78 },
    { studendid:4 ,name: 'Anna Brown', city: 'Houston', isactive: false, gender: 'Female', totalmarks: 88 },
    { studendid:5 , name: 'Tom Davis', city: 'Phoenix', isactive: true, gender: 'Male', totalmarks: 95 },
  ];

  redclick(){
    this.div1bgcolor = "bg-danger"
  }

  blueclick(){
    this.div1bgcolor = "bg-primary"
  }


}

