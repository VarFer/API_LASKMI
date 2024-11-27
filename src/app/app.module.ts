import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Importa el componente standalone
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Aquí no declaras AppComponent porque es un componente standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule { }
