import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  imports: [FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  mostrarModal = false;

  menuAbierto: number | null = null;

  usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@gmail.com', rol: 'Administrador' },
    { id: 2,nombre: 'Ana López', email: 'ana@gmail.com', rol: 'Empleado' },
    { id: 3,nombre: 'Luis Martínez', email: 'luis@gmail.com', rol: 'Supervisor' },
    { id: 4,nombre: 'Karla Torres', email: 'karla@gmail.com', rol: 'Recepción' },
    { id: 5,nombre: 'Pedro Gómez', email: 'pedro@gmail.com', rol: 'Almacén' },
  ];

  // =========================
  // MODALES
  // =========================

  mostrarModalEditar = false;
  mostrarModalEliminar = false;

  usuarioEditando: any = null;
  usuarioAEliminar: any = null;

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarUsuario() {
    console.log('Guardando usuario...');
    this.cerrarModal();
  }

  abrirMenu(id: number) {
    this.menuAbierto = id;
  }

  cerrarMenu() {
    this.menuAbierto = null;
  }

  // =========================
  // EDITAR
  // =========================
  abrirModalEditar(usuario: any) {
    this.usuarioEditando = { ...usuario };
    this.mostrarModalEditar = true;
    this.cerrarMenu();
  }

  guardarCambios() {
    const index = this.usuarios.findIndex((u) => u.email === this.usuarioEditando.email);
    if (index !== -1) {
      this.usuarios[index] = { ...this.usuarioEditando };
    }
    this.mostrarModalEditar = false;
  }

  // =========================
  // ELIMINAR
  // =========================
  abrirModalEliminar(usuario: any) {
    this.usuarioAEliminar = usuario;
    this.mostrarModalEliminar = true;
    this.cerrarMenu();
  }

  confirmarEliminar() {
    this.usuarios = this.usuarios.filter((u) => u.email !== this.usuarioAEliminar.email);
    this.mostrarModalEliminar = false;
  }
}
