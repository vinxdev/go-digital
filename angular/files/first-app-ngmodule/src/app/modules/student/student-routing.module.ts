import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentformComponent } from './studentform/studentform.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch: 'full'
  },{
    path:'list',
    component:StudentlistComponent
  },
  {
    path:'new-student',
    component:StudentformComponent
  },
  {
    path:'sections',
    component:SectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
