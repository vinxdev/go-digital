import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {
  greetings: string = ""
  greet(){
    this.greetings = "hello good to see you Alpha"
  }
}
