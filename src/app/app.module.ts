import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatError, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { NavComponent } from './nav/nav.component';
import { TrainedinComponent } from './trainedin/trainedin.component';
import { TarinedinviewComponent } from './trainedin/tarinedinview/tarinedinview.component';
import { BlockComponent } from './block/block.component';
import { BlockviewComponent } from './block/blockview/blockview.component';
import { MedsComponent } from './meds/meds.component';
import { MedsviewComponent } from './meds/medsview/medsview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TrainedinComponent,
    TarinedinviewComponent,
    BlockComponent,
    BlockviewComponent,
    MedsComponent,
    MedsviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatLabel,
    MatError,
    ReactiveFormsModule,
    MatInputModule,
  ],

  providers: [
    provideHttpClient(),
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
