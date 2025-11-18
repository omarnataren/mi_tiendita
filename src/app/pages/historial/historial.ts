import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historial',
  imports: [FormsModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
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
  menuAbierto: number | null = null;

  // 🟣 Indica si estás editando
  modoEditar = false;

  // 🟣 Objeto temporal para agregar/modificar
  ventaActual = {
    id: 0,
    fechaVenta: '',
    totalVenta: '',
  };

  abrirModal() {
    this.modoEditar = false;
    this.limpiarFormulario();
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  limpiarFormulario() {
    this.ventaActual = {
      id: 0,
      fechaVenta: '',
      totalVenta: '',
    };
  }

  guardarVenta() {
    if (this.modoEditar) {
      // 🟣 ACTUALIZAR
      const index = this.historial.findIndex((v) => v.id === this.ventaActual.id);
      if (index !== -1) {
        this.historial[index] = {
          ...this.ventaActual,
          totalVenta: `$${this.ventaActual.totalVenta}`,
        };
      }
    } else {
      // 🟣 AGREGAR NUEVA
      const nuevoId = this.historial.length ? Math.max(...this.historial.map((v) => v.id)) + 1 : 1;

      this.historial.push({
        id: nuevoId,
        fechaVenta: this.ventaActual.fechaVenta,
        totalVenta: `$${this.ventaActual.totalVenta}`,
      });
    }

    this.cerrarModal();
  }

  toggleMenu(index: number) {
    this.menuAbierto = this.menuAbierto === index ? null : index;
  }

  modificar(item: any) {
    this.modoEditar = true;

    // Convertir total "$900" → "900"
    const totalSinSigno = item.totalVenta.replace('$', '');

    this.ventaActual = {
      id: item.id,
      fechaVenta: item.fechaVenta,
      totalVenta: totalSinSigno,
    };

    this.menuAbierto = null;
    this.mostrarModal = true;
  }

  eliminar(id: number) {
    this.historial = this.historial.filter((v) => v.id !== id);
    this.menuAbierto = null;
  }
}
