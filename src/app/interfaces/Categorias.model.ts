export interface Categoria {
  categoria_id?: number;
  nombre: string;
  descripcion?: string;
}

export interface CategoriaFormData {
  nombre: string;
  descripcion: string;
}