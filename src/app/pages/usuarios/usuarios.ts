import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {
  usuarios = [
    { id: '001', nombre: 'Tom Cruise', email: 'tomcruise@example.com', rol: 'Administrador' },
    { id: '002', nombre: 'Bruno Mars', email: 'brunomars@example.com', rol: 'Empleado' },
    { id: '003', nombre: 'jose perez', email: 'joseperez@example.com', rol: 'Empleado' },
    { id: '004', nombre: 'jose perez', email: 'joseperez@example.com', rol: 'Empleado' },
    { id: '005', nombre: 'jose perez', email: 'joseperez@example.com', rol: 'Empleado' },
  ];

  mostrarModal = false;

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
}
