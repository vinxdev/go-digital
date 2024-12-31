import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './nav/nav.component';
import { TrainedinComponent } from './trainedin/trainedin.component';
import { TarinedinviewComponent } from './trainedin/tarinedinview/tarinedinview.component';
import { BlockviewComponent } from './block/blockview/blockview.component';
import { BlockComponent } from './block/block.component';
import { MedsviewComponent } from './meds/medsview/medsview.component';
import { MedsComponent } from './meds/meds.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nav',
    component:NavComponent
  },
  {
    path: 'trainedin',
    component:TrainedinComponent
  },
  {
    path: 'trainedinview',
    component:TarinedinviewComponent
  },
  {
    path:'block',
    component:BlockComponent
  },
  {
    path:'blockview',
    component:BlockviewComponent
  },
  {
    path:'meds',
    component:MedsComponent
  },
  {
    path:'medsview',
    component:MedsviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
