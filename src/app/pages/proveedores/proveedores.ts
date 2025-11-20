import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.html',
  styleUrls: ['./proveedores.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class Proveedores {
  proveedores = [
    {
      id_prov: 1,
      nombre: 'Proveedor 1',
      contacto: 'Juan Pérez',
      telefono: '555-1234',
      email: 'prov1@mail.com',
      direccion: 'Calle 1',
    },
    {
      id_prov: 2,
      nombre: 'Proveedor 2',
      contacto: 'Ana López',
      telefono: '555-5678',
      email: 'prov2@mail.com',
      direccion: 'Calle 2',
    },
  ];

  proveedorActual = {
    id_prov: '',
    nombre: '',
    contacto: '',
    telefono: '',
    email: '',
    direccion: '',
  };

  mostrarModal = false;
  mostrarModalEditar = false;
  mostrarModalEliminar = false;

  proveedorEditando: any = null;
  proveedorAEliminar: any = null;

  menuAbierto: number | null = null;

  abrirMenu(id: number) {
    this.menuAbierto = this.menuAbierto === id ? null : id;
  }

  cerrarMenu() {
    this.menuAbierto = null;
  }

  abrirModal() {
    this.proveedorActual = {
      id_prov: '',
      nombre: '',
      contacto: '',
      telefono: '',
      email: '',
      direccion: '',
    };
    this.mostrarModal = true;
  }

  abrirModalEditar(prov: any) {
    this.proveedorActual = { ...prov };
    this.mostrarModalEditar = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.mostrarModalEditar = false;
  }

  // ================================
  //       🔥 AGREGAR PROVEEDOR
  // ================================
  guardarProveedor() {
    const nuevo = {
      ...this.proveedorActual,
      id_prov: Number(this.proveedorActual.id_prov), // <-- 🔥 ARREGLO CLAVE
    };

    this.proveedores.push(nuevo);

    this.cerrarModal();
  }

  // ================================
  //       🔥 EDITAR PROVEEDOR
  // ================================
  guardarEdicion() {
    const idNum = Number(this.proveedorActual.id_prov); // <-- 🔥 IMPORTANTE

    const index = this.proveedores.findIndex((p) => p.id_prov === idNum);

    if (index !== -1) {
      this.proveedores[index] = {
        ...this.proveedorActual,
        id_prov: idNum, // <-- 🔥 OBLIGATORIO PARA NO CAUSAR ERROR
      };
    }

    this.cerrarModal();
  }

  abrirModalEliminar(proveedor: any) {
    this.proveedorAEliminar = proveedor;
    this.mostrarModalEliminar = true;
    this.cerrarMenu();
  }

  confirmarEliminar() {
    this.proveedores = this.proveedores.filter((p) => p.id_prov !== this.proveedorAEliminar.id_prov);
    this.mostrarModalEliminar = false;
  }
}
