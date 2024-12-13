import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { NewteacherComponent } from './newteacher/newteacher.component';


@NgModule({
  declarations: [
    TeacherlistComponent,
    NewteacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
