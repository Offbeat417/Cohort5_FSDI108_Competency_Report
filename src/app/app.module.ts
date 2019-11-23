import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { TempCalculatorComponent } from './temp-calculator/temp-calculator.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';
import { AboutComponent } from './about/about.component';//added in

@NgModule({
  declarations: [
    AppComponent,
    TempCalculatorComponent,
    NavBarComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //added in
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
