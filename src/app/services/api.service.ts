import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://apis.cloud-app.cl/laskmi'; 

  private getAuthHeaders() {
    const token = sessionStorage.getItem('token');
    return { headers: { 'Authorization': `Bearer ${token}` } };
  }

  // Función para hacer login y guardar el token
  async login(username: string, password: string) {
    const response = await axios.post(`${this.baseUrl}/login`, { username, password });
    const token = response.data.token;
    sessionStorage.setItem('token', token);
    return token;
  }

  // Función para obtener empresas
  async getCompanies() {
    const response = await axios.get(`${this.baseUrl}/companies`, this.getAuthHeaders());
    return response.data;
  }

  // Función para agregar una nueva empresa
  async addCompany(companyData: any) {
    const response = await axios.post(`${this.baseUrl}/companies`, companyData, this.getAuthHeaders());
    return response.data;
  }

  // Función para agregar un nuevo usuario
  async addUser(userData: any) {
    const response = await axios.post(`${this.baseUrl}/users`, userData, this.getAuthHeaders());
    return response.data;
  }

  // Función para agregar un nuevo producto
  async addProduct(productData: any) {
    const response = await axios.post(`${this.baseUrl}/products`, productData, this.getAuthHeaders());
    return response.data;
  }
}
