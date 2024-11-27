import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importa CommonModule para ngIf, ngFor, etc.

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
  standalone: true,  // Definimos el componente como standalone
  imports: [CommonModule]  // Importamos CommonModule para directivas comunes
})
export class AddCompanyComponent {
  name: string = '';  // Variable para almacenar el nombre de la compañía
  
  constructor(private apiService: ApiService, private router: Router) {}

  // Método para agregar una nueva compañía
  async addCompany() {
    const companyData = { name: this.name };  // Preparamos los datos de la compañía
    await this.apiService.addCompany(companyData);  // Llamamos al servicio para agregar la compañía
    this.router.navigate(['/companies']);  // Navegamos a la página de compañías después de agregarla
  }
}
