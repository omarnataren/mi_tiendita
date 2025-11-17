import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.html',
  styleUrls: ['./movimientos.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class Movimientos {
  // ================= DATOS =================
  movimientos: any[] = [
    {
      movimientoId: 1,
      productoId: 101,
      tipo: 'Entrada',
      cantidad: 50,
      fecha: '2025-10-15 10:30:00',
      detalle: 'Compra de inventario',
    },
    {
      movimientoId: 2,
      productoId: 102,
      tipo: 'Salida',
      cantidad: 20,
      fecha: '2025-10-16 14:20:00',
      detalle: 'Venta al cliente',
    },
    {
      movimientoId: 3,
      productoId: 103,
      tipo: 'Entrada',
      cantidad: 100,
      fecha: '2025-10-17 09:15:00',
      detalle: 'Reposición de stock',
    },
    {
      movimientoId: 4,
      productoId: 101,
      tipo: 'Salida',
      cantidad: 15,
      fecha: '2025-10-18 16:45:00',
      detalle: 'Venta mayorista',
    },
    {
      movimientoId: 5,
      productoId: 104,
      tipo: 'Entrada',
      cantidad: 75,
      fecha: '2025-10-19 11:00:00',
      detalle: 'Nueva compra',
    },
    {
      movimientoId: 6,
      productoId: 102,
      tipo: 'Salida',
      cantidad: 10,
      fecha: '2025-10-19 15:30:00',
      detalle: 'Venta minorista',
    },
    {
      movimientoId: 7,
      productoId: 105,
      tipo: 'Entrada',
      cantidad: 200,
      fecha: '2025-10-20 08:00:00',
      detalle: 'Inventario inicial',
    },
    {
      movimientoId: 8,
      productoId: 103,
      tipo: 'Salida',
      cantidad: 30,
      fecha: '2025-10-20 12:15:00',
      detalle: 'Pedido especial',
    },
  ];

  movimientoActual: any = {
    movimientoId: null,
    productoId: '',
    tipo: '',
    cantidad: '',
    fecha: '',
    detalle: '',
  };

  // ================= ESTADOS =================
  mostrarModal = false;
  mostrarModalEditar = false;
  menuAbierto: number | null = null;

  // ================= MÉTODOS =================

  abrirModal() {
    this.mostrarModal = true;
    this.movimientoActual = {
      movimientoId: null,
      productoId: '',
      tipo: '',
      cantidad: '',
      fecha: '',
      detalle: '',
    };
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.mostrarModalEditar = false;
  }

  abrirMenu(index: number) {
    this.menuAbierto = this.menuAbierto === index ? null : index;
  }

  modificar(movimiento: any) {
    this.movimientoActual = { ...movimiento };
    this.mostrarModalEditar = true;
    this.menuAbierto = null;
  }

  eliminar(movimiento: any) {
    this.movimientos = this.movimientos.filter((m) => m.movimientoId !== movimiento.movimientoId);
    this.menuAbierto = null;
  }

  guardarMovimiento() {
    const nuevoId =
      this.movimientos.length > 0
        ? Math.max(...this.movimientos.map((m) => m.movimientoId)) + 1
        : 1;

    const nuevoMovimiento = {
      ...this.movimientoActual,
      movimientoId: nuevoId,
    };

    this.movimientos.push(nuevoMovimiento);
    this.mostrarModal = false;
  }

  guardarEdicion() {
    const index = this.movimientos.findIndex(
      (m) => m.movimientoId === this.movimientoActual.movimientoId
    );

    if (index !== -1) {
      this.movimientos[index] = { ...this.movimientoActual };
    }

    this.mostrarModalEditar = false;
  }
}
