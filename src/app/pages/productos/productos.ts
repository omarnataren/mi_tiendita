import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // IMPORTANTE para usar ngModel

@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  mostrarModal = false;

  menuAbierto: string | null = null;

  productos = [
    {
      id: '001',
      nombre: 'Agua Ciel',
      descripcion: 'Agua embotellada 500ml',
      categoria: 'Bebidas',
      precioCompra: '$10.00',
      precioVenta: '$15.00',
      stock: '500 unidades',
      proveedor: 'cidavid',
    },
    {
      id: '002',
      nombre: 'Coca Cola',
      descripcion: 'Refresco 600ml',
      categoria: 'Bebidas',
      precioCompra: '$12.00',
      precioVenta: '$18.00',
      stock: '300 unidades',
      proveedor: 'coca',
    },
    {
      id: '003',
      nombre: 'Galletas Oreo',
      descripcion: 'Galletas chocolate',
      categoria: 'Snacks',
      precioCompra: '$15.00',
      precioVenta: '$22.00',
      stock: '200 unidades',
      proveedor: 'nestle',
    },
  ];

  // =========================
  // MODALES NUEVOS
  // =========================

  mostrarModalEditar = false;
  mostrarModalEliminar = false;

  productoEditando: any = null;
  productoAEliminar: any = null;

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarProducto() {
    console.log('Guardando producto...');
    this.cerrarModal();
  }

  abrirMenu(productoId: string) {
    this.menuAbierto = productoId;
  }

  cerrarMenu() {
    this.menuAbierto = null;
  }

  // =========================
  // MODIFICAR PRODUCTO
  // =========================
  abrirModalEditar(producto: any) {
    this.productoEditando = { ...producto };
    this.mostrarModalEditar = true;
    this.cerrarMenu();
  }

  guardarCambios() {
    const index = this.productos.findIndex((p) => p.id === this.productoEditando.id);
    if (index !== -1) {
      this.productos[index] = { ...this.productoEditando };
    }
    this.mostrarModalEditar = false;
  }

  // =========================
  // ELIMINAR PRODUCTO
  // =========================
  abrirModalEliminar(producto: any) {
    this.productoAEliminar = producto;
    this.mostrarModalEliminar = true;
    this.cerrarMenu();
  }

  confirmarEliminar() {
    this.productos = this.productos.filter((p) => p.id !== this.productoAEliminar.id);
    this.mostrarModalEliminar = false;
  }
}
