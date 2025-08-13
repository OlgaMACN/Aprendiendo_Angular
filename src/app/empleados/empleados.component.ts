import { Component } from "@angular/core";
import { Empleado } from "../empleado/empleado.component";

@Component({
    selector: "app-empleados",
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.css"],
    imports: [Empleado]
})
export class EmpleadosComponent {
}