import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatabindingComponent } from "../databinding/databinding.component";

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
