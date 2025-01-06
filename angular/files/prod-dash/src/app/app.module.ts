import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from './component/nav/nav.component';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewComponent } from './component/view/view.component';
import {MatCardModule} from '@angular/material/card';
import { AddComponent } from './component/add/add.component';
import { UpdateComponent } from './component/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './component/cart/cart.component';
import { PricePipe } from './component/cart/price.pipe';
import { BuyComponent } from './component/buy/buy.component';
import {MatDialog, matDialogAnimations, MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './component/dialog/dialog.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import { UsercartComponent } from './component/usercart/usercart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewComponent,
    AddComponent,
    UpdateComponent,
    CartComponent,
    PricePipe,
    BuyComponent,
    DialogComponent,
    UsercartComponent,
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconButton,
    MatFormFieldModule,
    MatFormField,
    RouterOutlet,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatBadgeModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
