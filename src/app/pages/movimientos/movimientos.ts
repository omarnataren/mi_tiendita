import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-movimientos',
  imports: [NgClass],
  templateUrl: './movimientos.html',
  styleUrl: './movimientos.css'
})
export class Movimientos {
  movimientos = [
    { movimientoId: 1, productoId: 101, tipo: 'Entrada', cantidad: 50, fecha: '2025-10-15 10:30:00', detalle: 'Compra de inventario' },
    { movimientoId: 2, productoId: 102, tipo: 'Salida', cantidad: 20, fecha: '2025-10-16 14:20:00', detalle: 'Venta al cliente' },
    { movimientoId: 3, productoId: 103, tipo: 'Entrada', cantidad: 100, fecha: '2025-10-17 09:15:00', detalle: 'Reposición de stock' },
    { movimientoId: 4, productoId: 101, tipo: 'Salida', cantidad: 15, fecha: '2025-10-18 16:45:00', detalle: 'Venta mayorista' },
    { movimientoId: 5, productoId: 104, tipo: 'Entrada', cantidad: 75, fecha: '2025-10-19 11:00:00', detalle: 'Nueva compra' },
    { movimientoId: 6, productoId: 102, tipo: 'Salida', cantidad: 10, fecha: '2025-10-19 15:30:00', detalle: 'Venta minorista' },
    { movimientoId: 7, productoId: 105, tipo: 'Entrada', cantidad: 200, fecha: '2025-10-20 08:00:00', detalle: 'Inventario inicial' },
    { movimientoId: 8, productoId: 103, tipo: 'Salida', cantidad: 30, fecha: '2025-10-20 12:15:00', detalle: 'Pedido especial' },
  ];

  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarMovimiento() {
    console.log('Guardando movimiento...');
    this.cerrarModal();
  }
}
