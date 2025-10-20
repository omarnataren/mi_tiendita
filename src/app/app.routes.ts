import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
import { Ticket } from './pages/ticket/ticket';
import { Proveedores } from './pages/proveedores/proveedores';
export const routes: Routes = [
  { path: 'ventas', component: Ventas },
  { path: 'ticket', component: Ticket },
  { path: 'proveedores', component: Proveedores },
  { path: '**', redirectTo: 'ventas', pathMatch: 'full' },
];
