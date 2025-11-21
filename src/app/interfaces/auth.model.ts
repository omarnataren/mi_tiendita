import { Usuario } from './Usuarios.model';
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  user: Usuario;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: Usuario | null;
  token: string | null;
}