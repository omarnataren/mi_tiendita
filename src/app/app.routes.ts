import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
import { Login } from '../pages/login/login';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'ventas', component: Ventas },
    // { path: '**', redirectTo: 'ventas', pathMatch: 'full' }
];
