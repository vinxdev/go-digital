import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home/home.module';
import { NavComponent } from './nav/nav.component';
import { IntercepterComponent } from './intercepter/intercepter.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService } from './intercepter/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntercepterComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
