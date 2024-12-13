import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { SectionsComponent } from './sections/sections.component';
import { StudentformComponent } from './studentform/studentform.component';
import { AlertComponent } from '../../shared/component/alert/alert.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    StudentlistComponent,
    SectionsComponent,
    StudentformComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
