import { Categoria } from './Categorias.model';
import { Proveedor } from './Proveedores.model';
import { MovimientoStock } from './Movimientos_stock.model';

export interface Producto {
  producto_id?: number;
  nombre: string;
  descripcion?: string;
  categoria_id: number;
  categoria?: Categoria;
  precio_compra: number;
  precio_venta: number;
  stock: number;
  fecha_ingreso?: Date | string;
  proveedor_id?: number;
  proveedor?: Proveedor;
}

export interface ProductoFormData {
  nombre: string;
  descripcion: string;
  categoria_id: number;
  precio_compra: number;
  precio_venta: number;
  stock: number;
  proveedor_id: number;
}

export interface ProductoFilter {
  search?: string;
  categoria_id?: number;
  proveedor_id?: number;
  min_stock?: number;
  max_stock?: number;
}

export interface ProductoDetalle extends Producto {
  movimientos?: MovimientoStock[];
  ventasRealizadas?: number;
  margenGanancia?: number;
}