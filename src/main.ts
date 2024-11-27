import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Importa el componente standalone

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
