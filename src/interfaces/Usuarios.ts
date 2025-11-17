export interface Usuario {
  usuario_id: number;
  nombre: string;
  email: string;
  password: string;
  rol: string; // enum en la DB → string en TS
}
