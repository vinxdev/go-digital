import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title="alpha"


  changeTitle(){
    this.title=="alpha"?this.title="vineet":this.title="alpha"
  }

  ngOnInit() {
    // this.changeTitle();
  }

}


