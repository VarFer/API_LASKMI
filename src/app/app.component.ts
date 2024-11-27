import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para usar directivas como ngIf, ngFor, etc.
import { RouterModule } from '@angular/router';  // Para enrutamiento

@Component({
  selector: 'app-root',
  standalone: true,  // Marca el componente como standalone
  imports: [CommonModule, RouterModule],  // Importa los módulos necesarios
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laskmi App';  // Título de la aplicación
}
