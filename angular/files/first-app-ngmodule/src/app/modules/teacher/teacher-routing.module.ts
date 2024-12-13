import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { NewteacherComponent } from './newteacher/newteacher.component';

const routes: Routes = [
    {
      path:'list',
      component:TeacherlistComponent
    },
    {
      path:'new-teacher',
      component:NewteacherComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
