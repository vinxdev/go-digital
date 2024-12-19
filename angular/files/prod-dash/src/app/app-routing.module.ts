import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CreateaccComponent } from './component/createacc/createacc.component';
import { HomeComponent } from './component/home/home.component';
import { ViewComponent } from './component/view/view.component';
import { AddComponent } from './component/add/add.component';
import { UpdateComponent } from './component/update/update.component';

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
    canActivate:[]
  },
  {
    path: `view/:id`,
    component: ViewComponent,
  },
  {
    path: `add`,
    component: AddComponent,
  },
  {
    path: `update/:id`,
    component: UpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
