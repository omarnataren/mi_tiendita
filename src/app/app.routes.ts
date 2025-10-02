import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
export const routes: Routes = [
    { path: 'ventas', component: Ventas },
    { path: '**', redirectTo: 'ventas', pathMatch: 'full' }
];
