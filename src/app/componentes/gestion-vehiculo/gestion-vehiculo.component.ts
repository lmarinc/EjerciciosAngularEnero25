import { Component } from '@angular/core';
import {Vehiculo,Motocicleta,Coche} from '../../models/vehiculo.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-gestion-vehiculo',
  standalone: true,
  templateUrl: './gestion-vehiculo.component.html',
  imports: [
    NgIf,
    NgForOf
  ]
})
export class GestionVehiculoComponent {
  vehiculos: Vehiculo[] = [];

  constructor() {
    this.vehiculos = [
      new Coche('Toyota', 'Corolla', 2020, 4),
      new Coche('Ford', 'Mustang', 2021, 2),
      new Motocicleta('Harley-Davidson', 'Street 750', 2019, 'Cruiser'),
      new Motocicleta('Kawasaki', 'Ninja ZX-6R', 2022, 'Deportiva'),
    ];
  }

  mostrarDetallesVehiculo(vehiculo: Vehiculo): string {
    return vehiculo.mostrarDetalles();
  }
}
