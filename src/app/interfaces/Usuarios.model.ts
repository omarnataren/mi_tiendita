export interface Usuario {
  usuario_id?: number;
  nombre: string;
  email: string;
  password?: string;
  rol: RolUsuario;
}

export enum RolUsuario {
  ADMIN = 'admin',
  VENDEDOR = 'vendedor',
  ALMACEN = 'almacen'
}

export interface UsuarioFormData {
  nombre: string;
  email: string;
  password: string;
  confirmPassword?: string;
  rol: RolUsuario;
}

export interface UsuarioFilter {
  search?: string;
  rol?: RolUsuario;
}