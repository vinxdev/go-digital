import { bootstrapApplication } from '@angular/platform-browser';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { GlobalerrorhandlerService } from './app/component/error/globalerrorhandler.service';

bootstrapApplication(AppComponent, {
  providers: [
    {provide:ErrorHandler, useClass:GlobalerrorhandlerService}
    ,importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(routes))
    ]
}).catch(err => console.error(err));


