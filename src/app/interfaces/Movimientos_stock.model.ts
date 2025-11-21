import { Producto } from './Productos.models';
export interface MovimientoStock {
  movimiento_id?: number;
  producto_id: number;
  producto?: Producto;
  tipo: TipoMovimiento;
  cantidad: number;
  fecha?: Date | string;
  detalle?: string;
}

export enum TipoMovimiento {
  ENTRADA = 'Entrada',
  SALIDA = 'Salida',
  AJUSTE = 'Ajuste',
  DEVOLUCION = 'Devolucion'
}

export interface MovimientoFormData {
  producto_id: number;
  tipo: TipoMovimiento;
  cantidad: number;
  detalle: string;
}

export interface MovimientoFilter {
  producto_id?: number;
  tipo?: TipoMovimiento;
  fecha?: string; // formato: YYYY-MM
  fecha_inicio?: string;
  fecha_fin?: string;
}