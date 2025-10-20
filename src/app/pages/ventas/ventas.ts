import { Component } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ventas',
  imports: [Ticket, RouterLink],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {
  ventas = [
    { id: 1, producto: 'Chetos', cantidad: 1, total: '15' },
    { id: 2, producto: 'Coca-Cola', cantidad: 22, total: '440' },
    { id: 3, producto: 'Yakult', cantidad: 10, total: '200' },
    { id: 4, producto: 'Galletas', cantidad: 20, total: '300' },
    { id: 5, producto: 'Chips jalapeño', cantidad: 20, total: '350' },
  ];
}
