import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';  // Importa tu servicio ApiService
import { CommonModule } from '@angular/common';  // Importa CommonModule, necesario para directivas comunes como ngIf

// Definición del componente como standalone
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  standalone: true,  // Hacer el componente standalone
  imports: [CommonModule]  // Importar CommonModule para usar directivas como ngIf, ngFor, etc.
})
export class CompanyComponent implements OnInit {
  companies: any[] = [];  // Variable para almacenar las compañías

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCompanies();  // Cargar las compañías cuando el componente se inicializa
  }

  async loadCompanies() {
    // Obtener las compañías desde el ApiService
    this.companies = await this.apiService.getCompanies();
  }
}
