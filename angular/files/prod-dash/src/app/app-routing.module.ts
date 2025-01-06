import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CreateaccComponent } from './component/createacc/createacc.component';
import { HomeComponent } from './component/home/home.component';
import { ViewComponent } from './component/view/view.component';
import { AddComponent } from './component/add/add.component';
import { UpdateComponent } from './component/update/update.component';
import { guardGuard } from './component/guard/guard.guard';
import { CartComponent } from './component/cart/cart.component';
import { BuyComponent } from './component/buy/buy.component';
import { UsercartComponent } from './component/usercart/usercart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: CreateaccComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[guardGuard]
  },
  {
    path: `view/:id`,
    component: ViewComponent,
    canActivate:[guardGuard]
  },
  {
    path: `add`,
    component: AddComponent,
    canActivate:[guardGuard]
  },
  {
    path: `update/:id`,
    component: UpdateComponent,
    canActivate:[guardGuard]
  },
  {
    path: `cart/:id`,
    component: CartComponent,
    canActivate:[guardGuard]
  },
  {
    path: `buy`,
    component: BuyComponent,
    canActivate:[guardGuard]
  },
  {
    path: 'usercart',
    component: UsercartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
