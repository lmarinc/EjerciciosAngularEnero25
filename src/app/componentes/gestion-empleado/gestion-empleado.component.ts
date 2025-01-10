import { Component } from '@angular/core';
import {  Empleado,EmpleadoTiempoCompleto,EmpleadoPorHoras,} from '../../models/empleado.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-gestion-empleado',
  standalone: true,
  templateUrl: './gestion-empleado.component.html',
  imports: [
    NgIf,
    NgForOf
  ]
})
export class GestionEmpleadoComponent {
  empleados: Empleado[] = [];

  constructor() {
    this.empleados = [
      new EmpleadoTiempoCompleto('Ana', 'López', 2000, 10, 20),
      new EmpleadoTiempoCompleto('Carlos', 'Gómez', 1800, 5, 25),
      new EmpleadoPorHoras('Lucía', 'Martínez', 15, 120),
      new EmpleadoPorHoras('Pedro', 'Ruiz', 20, 80),
    ];
  }

  mostrarDetallesEmpleado(empleado: Empleado): string {
    return empleado.mostrarDetalles();
  }
}
