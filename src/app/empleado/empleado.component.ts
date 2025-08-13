import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.html',
  //  template: `<p style="text-align: center;">Empleado</p>`,
  styleUrl: './empleado.css'
  //  styles: ["p{background-color: red}"] // se puede usar el componente inline
})
export class Empleado {

  nombre = "Juan"
  apellido = "Perez"
  edad = 18
  // empresa = "Angular"

  /** para hacerlo con botón: 
  guardarEmpresa(value: string) {
    throw new Error('Error inesperado.');
  }*/
}
