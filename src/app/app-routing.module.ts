import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'admin-registration', component: AdminRegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin-login', component: AdminLoginComponent}
=======
import { FloorAddComponent } from './floor-add/floor-add.component';
import { FloorMapComponent } from './floor-map/floor-map.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopAddComponent } from './shop-add/shop-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-registration', component: AdminRegistrationComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path:  'registration', component: RegistrationComponent },
  { path: 'floor-map/:_id', component: FloorMapComponent },
  { path: 'home', component: HomeComponent },
  { path: 'floor-add', component: FloorAddComponent },
  { path: 'shop-add/:_id', component: ShopAddComponent }
>>>>>>> ede5cc6 (Front-End)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
