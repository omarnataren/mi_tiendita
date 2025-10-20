import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
import { Ticket } from './pages/ticket/ticket';
import { Proveedores } from './pages/proveedores/proveedores';
import { Login } from '../pages/login/login';
export const routes: Routes = [
  { path: 'ventas', component: Ventas },
  { path: 'ticket', component: Ticket },
  { path: 'login', component: Login}
  { path: 'proveedores', component: Proveedores },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
];
