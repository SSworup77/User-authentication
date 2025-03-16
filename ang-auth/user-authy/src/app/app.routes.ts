import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component:NavbarComponent
},
{
    path:'login',
    component:LoginComponent
}];
