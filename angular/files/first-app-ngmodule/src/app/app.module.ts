import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home/home.module';
import { AddUserComponent } from './users/users/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent]
})

export class AppModule { }
