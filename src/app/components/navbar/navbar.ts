import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface menuItem {
  name: string;
  route: string;
}
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuList: menuItem[] = [
    { name: 'VENTAS', route: '/ventas' },
    { name: 'PRODUCTOS', route: '/productos' },
    { name: 'USUARIOS', route: '/usuarios' },
    { name: 'MOVIMIENTOS', route: '/movimientos' },
    { name: 'PROVEEDORES', route: 'proveedores' },
    { name: 'HISTORIAL', route: '/historial' },
  ];
}
