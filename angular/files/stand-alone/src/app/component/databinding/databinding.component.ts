import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})

export class DatabindingComponent {
  courseName : string = "Angular 19";
  inputType = "Checkbox";
  rollNumber: number = 92;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  myclassname= "bg-primary";
  languages : string[] = ["react","node","express","django",".net"];
  firstname = signal('vineet salian');

  showAlert(message: string){
    alert(message)
  } 

  changecoursename(){
    const randomecoursename = Math.floor(Math.random() * this.courseName.length) 
    if (randomecoursename <=4) {
      this.courseName = this.languages[randomecoursename]
    }
    this.firstname.set("alpha")
}}
