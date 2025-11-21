import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../interfaces';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private url =  environment.apiURL;
  private http = inject(HttpClient);

  login(credentials: LoginRequest) {
    return this.http.post<LoginRequest>(`${this.url}auth/login`, credentials);
  }
}
