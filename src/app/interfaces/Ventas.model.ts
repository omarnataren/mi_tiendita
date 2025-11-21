import { Producto } from './Productos.models';
export interface Venta {
  venta_id?: number;
  fecha_venta?: Date | string;
  total: number;
  cliente_id?: number;
  detalles?: DetalleVenta[];
}

export interface DetalleVenta {
  detalle_id?: number;
  venta_id?: number;
  producto_id: number;
  producto?: Producto;
  cantidad: number;
  precio_unitario: number;
  total: number;
}

export interface VentaFormData {
  cliente_id?: number;
  detalles: DetalleVentaFormData[];
}

export interface DetalleVentaFormData {
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
}

export interface VentaDetalle extends Venta {
  detalles: DetalleVenta[];
  subtotal?: number;
  descuento?: number;
  metodoPago?: string;
}

export interface VentaFilter {
  fecha_inicio?: string;
  fecha_fin?: string;
  cliente_id?: number;
  min_total?: number;
  max_total?: number;
}