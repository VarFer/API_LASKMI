import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './components/company/company/company.component';
import { AddCompanyComponent } from './components/company/add-company/add-company.component';
import { UserComponent } from './components/user/user/user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { ProductComponent } from './components/product/product/product.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';

// Exportar routes
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'users', component: UserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'products', component: ProductComponent },
  { path: 'add-product', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Asegúrate de que esto esté correcto
  exports: [RouterModule]  // Asegúrate de exportar RouterModule
})
export class AppRoutingModule { }
