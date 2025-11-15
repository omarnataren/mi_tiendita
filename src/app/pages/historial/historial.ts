import { Component } from '@angular/core';

@Component({
  selector: 'app-historial',
  imports: [],
  templateUrl: './historial.html',
  styleUrl: './historial.css'
})
export class Historial {
  historial = [
    { id: 1, fechaVenta: '01/09/2025', totalVenta: '$1,800' },
    { id: 2, fechaVenta: '02/09/2025', totalVenta: '$800' },
    { id: 3, fechaVenta: '03/9/2025', totalVenta: '$900' },
    { id: 4, fechaVenta: '04/09/2025', totalVenta: '$1,210' },
    { id: 5, fechaVenta: '05/09/2025', totalVenta: '$2,050' },
  ];

  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarVenta() {
    console.log('Guardando venta...');
    this.cerrarModal();
  }
}
