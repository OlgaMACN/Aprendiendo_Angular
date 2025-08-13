import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.html',
  //  template: `<p style="text-align: center;">Empleado</p>`,
  styleUrl: './empleado.css'
  //  styles: ["p{background-color: red}"] // se puede usar el componente inline
})
export class Empleado {


  nombre = "Juan"
  apellido = "Perez"
  edad = 18
  empresa = "Telepizza"


  // propiedades binding
  habilitarCuadroProperty = false
  userRegistradoProperty = false
  textoRegistradoProperty = "No hay nadie registrado"

  getRegistroUsuario() {
    this.userRegistradoProperty = false
  }

  // función para crear la ventana emergente
  setUsuarioRegistrado(nombreEvento: Event) {
    // alert("Usuario registrado")
    // this.textoRegistradoProperty = "El usuario se ha registrado correctamente"
    //alert(nombreEvento.target)

    /* casting de Evento a HTMLInputElement */
    if ((<HTMLInputElement>nombreEvento.target).value == "si") {
      this.textoRegistradoProperty = "El usuario se ha registrado correctamente"
    } else {
      this.textoRegistradoProperty = "No hay nadie registrado"
    }
  }

  /** para hacerlo con botón: 
  guardarEmpresa(value: string) {
    throw new Error('Error inesperado.');
  }*/
}
