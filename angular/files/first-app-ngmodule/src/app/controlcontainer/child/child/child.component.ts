import { Component } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})

export class ChildComponent {
  constructor(public controlcontainer: ControlContainer) {}

  getControlGroup(): FormGroup {
    return this.controlcontainer.control as FormGroup;
  }
}


