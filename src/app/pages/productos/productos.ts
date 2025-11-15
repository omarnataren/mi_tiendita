import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  mostrarModal = false;
  
  productos = [
    { id: '001', nombre: 'Agua Ciel', descripcion: 'Agua embotellada 500ml', categoria: 'Bebidas', precioCompra: '$10.00', precioVenta: '$15.00', stock: '500 unidades', proveedor: 'cidavid' },
    { id: '001', nombre: 'Agua Ciel', descripcion: 'Agua embotellada 500ml', categoria: 'Bebidas', precioCompra: '$10.00', precioVenta: '$15.00', stock: '500 unidades', proveedor: 'cidavid' },
    { id: '001', nombre: 'Agua Ciel', descripcion: 'Agua embotellada 500ml', categoria: 'Bebidas', precioCompra: '$10.00', precioVenta: '$15.00', stock: '500 unidades', proveedor: 'cidavid' },
    { id: '001', nombre: 'Agua Ciel', descripcion: 'Agua embotellada 500ml', categoria: 'Bebidas', precioCompra: '$10.00', precioVenta: '$15.00', stock: '500 unidades', proveedor: 'cidavid' },
    { id: '001', nombre: 'Agua Ciel', descripcion: 'Agua embotellada 500ml', categoria: 'Bebidas', precioCompra: '$10.00', precioVenta: '$15.00', stock: '500 unidades', proveedor: 'cidavid' },
    { id: '001', nombre: 'Agua Ciel', descripcion: 'Agua embotellada 500ml', categoria: 'Bebidas', precioCompra: '$10.00', precioVenta: '$15.00', stock: '500 unidades', proveedor: 'cidavid' },
    { id: '001', nombre: 'Agua Ciel', descripcion: 'Agua embotellada 500ml', categoria: 'Bebidas', precioCompra: '$10.00', precioVenta: '$15.00', stock: '500 unidades', proveedor: 'cidavid' },
    { id: '001', nombre: 'Agua Ciel', descripcion: 'Agua embotellada 500ml', categoria: 'Bebidas', precioCompra: '$10.00', precioVenta: '$15.00', stock: '500 unidades', proveedor: 'cidavid' },
  ];

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarProducto() {
    // Aquí irá la lógica para guardar el producto
    console.log('Guardando producto...');
    this.cerrarModal();
  }
}
