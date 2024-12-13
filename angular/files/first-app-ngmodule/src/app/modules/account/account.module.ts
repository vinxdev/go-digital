import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FeesformComponent } from './feesform/feesform.component';
import { LoginComponent } from '../auth/login/login.component';
import { ForgetpasswordComponent } from '../auth/forgetpassword/forgetpassword.component';


@NgModule({
  declarations: [
    FeesformComponent,
    LoginComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
