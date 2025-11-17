export interface MovimientoStock {
  movimiento_id: number;
  producto_id: number;   
  tipo: string;          
  cantidad: number;
  fecha: Date;
  descripcion: string;
}
