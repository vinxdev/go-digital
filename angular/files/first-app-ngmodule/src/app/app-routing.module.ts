import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntercepterComponent } from './intercepter/intercepter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'intercepter',
    component: IntercepterComponent
},
{
  path:'',
  component: HomeComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
