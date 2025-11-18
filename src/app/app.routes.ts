import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
import { Ticket } from './pages/ticket/ticket';
import { Proveedores } from './pages/proveedores/proveedores';
import { Login } from './pages/login/login';
import { Historial } from './pages/historial/historial';
import { Usuarios } from './pages/usuarios/usuarios';
import { Movimientos } from './pages/movimientos/movimientos';
import { Productos } from './pages/productos/productos';
export const routes: Routes = [
  { path: 'ventas', component: Ventas },
  { path: 'ticket', component: Ticket },
  { path: 'login', component: Login },
  { path: 'historial', component: Historial },
  { path: 'usuarios', component: Usuarios },
  { path: 'proveedores', component: Proveedores },
  { path: 'movimientos', component: Movimientos },
  { path: 'productos', component: Productos },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
