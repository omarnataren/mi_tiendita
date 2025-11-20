export interface DetalleVenta {
  detalle_id: number;
  venta_id: number;       
  producto_id: number;    
  cantidad: number;
  precio_unitario: number;
  total: number;
}