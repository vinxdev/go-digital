import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})

export class TemplateComponent {
  isUserLoggedIn : boolean = false;
  loggedInUserName : string = "Vineet";
  @ViewChild('dynamictem') dynamictemp : TemplateRef<any> | undefined
  @ViewChild('dynamicContainer',{read:ViewContainerRef}) dynContainer : ViewContainerRef | undefined
  loadtemplate(){
    if (this.dynamictemp) {
      this.dynContainer?.createEmbeddedView(this.dynamictemp)
    }
  }
}
