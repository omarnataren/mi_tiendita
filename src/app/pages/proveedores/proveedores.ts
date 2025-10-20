import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  imports: [],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.css',
})
export class Proveedores {
  proveedores = [
    {
      id_prov: 1,
      nombre: 'Proveedor A',
      contacto: '1234567890',
      telefono: '1234567',
      email: 'Aaaa@gmail.com',
      direccion: 'Calle Falsa 123',
    },
    {
      id_prov: 2,
      nombre: 'Proveedor B',
      contacto: '0987654321',
      telefono: '7654321',
      email: 'Abcd@gmail.com',
      direccion: 'Avenida Siempre Viva 456',
    },
    {
      id_prov: 3,
      nombre: 'Proveedor C',
      contacto: '1122334455',
      telefono: '1122334',
      email: 'abcdgf@gmail.com',
      direccion: 'Boulevard de los Sueños Rotos 789',
    },
  ];
}
