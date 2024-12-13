import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './component/alert/alert.component';
import { MytableComponent } from './component/mytable/mytable.component';
import { TooltipDirective } from './component/tooltip.directive';
import { NaPipe } from './pipe/na.pipe';



@NgModule({
  declarations: [
    AlertComponent,
    MytableComponent,
    TooltipDirective,
    NaPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AlertComponent,
  ]
})
export class SharedModule { }
