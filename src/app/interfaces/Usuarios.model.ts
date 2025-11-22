export interface Usuario {
  usuario_id: number;
  nombre: string;
  email: string;
  rol: RolUsuario | null;
}

export type UsuarioPost = Omit<Usuario, 'usuario_id'> & {
  password: string;
};

export type UsuarioEdicion = Omit<Usuario, 'usuario_id'>;

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