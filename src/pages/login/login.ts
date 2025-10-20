import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 Importar esto
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) {}
  onLogin(){
    this.router.navigate(['/ventas'])
  }
}
