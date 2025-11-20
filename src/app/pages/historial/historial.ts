import { Component } from '@angular/core';
import { Venta, DetalleVenta } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {
  historial: Venta[] = [
    { venta_id: 1, fecha_venta: new Date('2025-09-05'), total: 1800, cliente_id: 12 },
    { venta_id: 2, fecha_venta: new Date('2025-09-02'), total: 800, cliente_id: 12 },
    { venta_id: 3, fecha_venta: new Date('2025-09-03'), total: 900, cliente_id: 12 },
    { venta_id: 4, fecha_venta: new Date('2025-09-04'), total: 1210, cliente_id: 12 },
    { venta_id: 5, fecha_venta: new Date('2025-09-05'), total: 2050, cliente_id: 12 },
  ];

  // Modal de detalle de venta
  mostrarModalDetalle = false;
  ventaSeleccionada: Venta | null = null;
  detallesVenta: DetalleVenta[] = [];
  
  // Menú de opciones
  menuAbierto: number | null = null;
  menuPosicion = { top: '0px', left: '0px' };

  // Abrir modal con detalle de la venta
  verDetalle(venta: Venta) {
    this.ventaSeleccionada = venta;
    this.mostrarModalDetalle = true;
    
    // TODO: Aquí harás el GET /api/ventas/:venta_id para obtener los detalles
    // Por ahora simulo datos de ejemplo
    this.detallesVenta = [
      { detalle_id: 1, venta_id: venta.venta_id, producto_id: 101, cantidad: 2, precio_unitario: 15, total: 30 },
      { detalle_id: 2, venta_id: venta.venta_id, producto_id: 102, cantidad: 1, precio_unitario: 25, total: 25 },
    ];
  }

  // Cerrar modal de detalle
  cerrarModalDetalle() {
    this.mostrarModalDetalle = false;
    this.ventaSeleccionada = null;
    this.detallesVenta = [];
  }

  // Formatear fecha para mostrar
  formatearFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  // Toggle menú de opciones
  toggleMenu(index: number, event?: MouseEvent) {
    if (this.menuAbierto === index) {
      this.menuAbierto = null;
    } else {
      this.menuAbierto = index;
      
      // Calcular posición del menú basado en el click
      if (event) {
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        this.menuPosicion = {
          top: `${rect.bottom + 5}px`,
          left: `${rect.left - 120}px` // Ajusta para que aparezca a la izquierda del botón
        };
      }
    }
  }

  // Modificar venta
  modificar(venta: Venta) {
    console.log('Modificar venta:', venta);
    // TODO: Abrir modal de edición o navegar a página de edición
    this.menuAbierto = null;
  }

  // Eliminar venta
  eliminar(venta_id: number) {
    if (confirm('¿Estás seguro de eliminar esta venta?')) {
      // TODO: Hacer DELETE /api/ventas/:venta_id
      this.historial = this.historial.filter(v => v.venta_id !== venta_id);
      console.log('Venta eliminada:', venta_id);
    }
    this.menuAbierto = null;
  }
}
