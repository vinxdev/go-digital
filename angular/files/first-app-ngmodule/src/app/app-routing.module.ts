import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntercepterComponent } from './intercepter/intercepter.component';
import { HomeComponent } from './home/home.component';
import { AnchorScrollingComponent } from './anchor-scrolling/anchor-scrolling.component';
import { AuthenticationGuardComponent } from './authentication-guard/authentication-guard.component';
import { authGuard} from './authentication-guard/auth.guard';
import { CancellationComponent } from './cancellation/cancellation.component';
import { ControlContainer } from '@angular/forms';
import { ControlcontainerComponent } from './controlcontainer/controlcontainer.component';
import { EventemitComponent } from './eventemit/eventemit.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'home',
  pathMatch:'full',
},
{
    path:'intercepter',
    component: IntercepterComponent
},
{
    path:'home',
    component: HomeComponent
},
{
    path:'anchor',
    component: AnchorScrollingComponent,
    canActivate: [authGuard]
},
{
  path:'auth',
  component: AuthenticationGuardComponent,
},
{
  path:'cancel',
  component: CancellationComponent,
},
{
  path:'control',
  component: ControlcontainerComponent
},
{
  path:'event',
  component: EventemitComponent,
  children:[
    
  ]
},
{
  path:'authenticate',
  loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
},
{
  path:'account',
  loadChildren: ()=> import('./modules/account/account.module').then(m=>m.AccountModule)
},
{
  path:'teacher',
  loadChildren: ()=> import('./modules/teacher/teacher.module').then(m=>m.TeacherModule)
},
{
  path:'student',
  loadChildren: ()=> import('./modules/student/student.module').then(m=>m.StudentModule)
},
{
  path:'reactive',
  component:ReactiveformComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration : 'top', anchorScrolling : 'enabled',enableTracing: true, useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
