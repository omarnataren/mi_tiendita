import { Producto } from './Productos.models';

export interface Proveedor {
  proveedor_id?: number;
  nombre: string;
  contacto?: string;
  telefono?: string;
  email?: string;
  direccion?: string;
}

export interface ProveedorFormData {
  nombre: string;
  contacto: string;
  telefono: string;
  email: string;
  direccion: string;
}

export interface ProveedorFilter {
  search?: string;
}

export interface ProveedorDetalle extends Proveedor {
  productos?: Producto[];
  totalProductos?: number;
}