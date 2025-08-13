import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';

@Component({ /* Decorador que tiene definido un 
             selector, una plantilla html y un archivo css */
  selector: 'app-root',
  imports: [RouterOutlet, EmpleadosComponent, FormsModule], /* Importar el componente EmpleadosComponent 
                                               para poder utilizarlo /visualizarlo dentro de 
                                               la página principal */
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('introAngular');
  // propiedad reutilizable
  texto = "Buena Suerte para Septiembre <3"
}
