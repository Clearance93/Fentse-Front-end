import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> ede5cc6 (Front-End)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FloorMapComponent } from './floor-map/floor-map.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FloorAddComponent } from './floor-add/floor-add.component';
import { ShopAddComponent } from './shop-add/shop-add.component';
>>>>>>> ede5cc6 (Front-End)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    RegistrationComponent,
    LoginComponent,
    AdminRegistrationComponent,
    AdminLoginComponent
=======
    AdminRegistrationComponent,
    LoginComponent,
    AdminLoginComponent,
    RegistrationComponent,
    FloorMapComponent,
    FloorAddComponent,
    ShopAddComponent
>>>>>>> ede5cc6 (Front-End)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
=======
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
>>>>>>> ede5cc6 (Front-End)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
