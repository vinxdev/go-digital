import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddUserComponent
  ]
})
export class UsersModule { }
