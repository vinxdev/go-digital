import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home/home.module';
import { NavComponent } from './nav/nav.component';
import { IntercepterComponent } from './intercepter/intercepter.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService } from './intercepter/interceptor.service';
import { AnchorScrollingComponent } from './anchor-scrolling/anchor-scrolling.component';
import { CommonModule } from '@angular/common';
import { AuthenticationGuardComponent } from './authentication-guard/authentication-guard.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { ControlcontainerComponent } from './controlcontainer/controlcontainer.component';
import { ChildComponent } from './controlcontainer/child/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventemitComponent } from './eventemit/eventemit.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntercepterComponent,
    AnchorScrollingComponent,
    AuthenticationGuardComponent,
    CancellationComponent,
    ControlcontainerComponent,
    ChildComponent,
    EventemitComponent,
    ReactiveformComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
