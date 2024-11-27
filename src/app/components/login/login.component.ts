import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';  // Importa tu servicio ApiService
import { Router, RouterModule } from '@angular/router';  // Importa el router para redirigir después del login
import { FormsModule } from '@angular/forms';

// Definición del componente como standalone
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,  // Hacer el componente standalone
  imports: [          // Importamos lo necesario para este componente
    FormsModule,      // Necesario para [(ngModel)]
    RouterModule      // Necesario para el enrutamiento
  ]
})
export class LoginComponent {
  username: string = '';  // Variable para el nombre de usuario
  password: string = '';  // Variable para la contraseña
  errorMessage: string = '';  // Mensaje de error en caso de fallo de login

  constructor(private apiService: ApiService, private router: Router) {}

  // Método para realizar el login
  async login() {
    // Validar que los campos username y password no estén vacíos
    if (!this.username || !this.password) {
      this.errorMessage = 'Both fields are required.';  // Mensaje de error si faltan campos
      return;  // No ejecuta el resto de la lógica si los campos están vacíos
    }

    try {
      // Llamamos al servicio apiService para intentar hacer login
      await this.apiService.login(this.username, this.password);

      // Si el login es exitoso, redirigimos al usuario a la página de empresas
      this.router.navigate(['/companies']);
    } catch (error) {
      // Si el login falla (por ejemplo, credenciales incorrectas), mostramos un mensaje de error
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
