import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.html',
  styleUrls: ['./ticket.css'],
})
export class Ticket {
  productos = [
    { nombre: 'Leche', precio: 25 },
    { nombre: 'Pan', precio: 15 },
    { nombre: 'Huevos', precio: 30 },
    { nombre: 'Manzanas', precio: 20 },
  ];

  calcularTotal(): number {
    return this.productos.reduce((acc, item) => acc + item.precio, 0);
  }

  imprimirTicket() {
    window.print();
  }
}
