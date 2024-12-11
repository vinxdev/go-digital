import { Routes } from '@angular/router';
import { PipeComponent } from './component/pipe/pipe.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { TemplateComponent } from './component/template/template.component';
import { StructDirectiveComponent } from './component/struct-directive/struct-directive.component';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services/services.component';
import { FormComponent } from './component/form/form.component';
import { ErrorComponent } from './component/error/error.component';

export const routes: Routes = [
    {
        path:'pipe',
        component: PipeComponent
    },
    {
        path:'data-binding',
        component: DatabindingComponent
    },
    {
        path:'struct-directive',
        component: StructDirectiveComponent
    },
    {
        path:'template',
        component: TemplateComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'services',
        component:ServicesComponent
    },
    {
        path:'form',
        component:FormComponent
    },
    {
        path:'error',
        component:ErrorComponent
    }
];
