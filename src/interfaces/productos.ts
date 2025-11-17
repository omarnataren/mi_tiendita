export interface Productos {
    producto_id: number;
  nombre: string;
  descripcion: string;
  categoria_id: number;     
  precio_compra: number;
  precio_venta: number;
  stock: number;
  fecha_ingreso: Date;
  proveedor_id: number; 
 }
