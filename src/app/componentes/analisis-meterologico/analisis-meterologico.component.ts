import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgForOf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-analisis-meteorologico',
  standalone: true,
  imports: [MatIconModule, FormsModule, NgForOf, CurrencyPipe, CommonModule],
  templateUrl: './analisis-meterologico.component.html',
})
export class AnalisisMeteorologicoComponent {
  dias = [
    { fecha: '01/01/2025', temperatura: 22, humedad: 60, precipitacion: 5 },
    { fecha: '02/01/2025', temperatura: 25, humedad: 55, precipitacion: 0 },
    { fecha: '03/01/2025', temperatura: 20, humedad: 70, precipitacion: 10 },
    { fecha: '04/01/2025', temperatura: 30, humedad: 50, precipitacion: 0 },
    { fecha: '05/01/2025', temperatura: 28, humedad: 65, precipitacion: 2 },
    { fecha: '06/01/2025', temperatura: 24, humedad: 60, precipitacion: 0 },
    { fecha: '07/01/2025', temperatura: 26, humedad: 55, precipitacion: 0 },
  ];

  calcularTemperaturaPromedio(): number {
    const totalTemperaturas = this.dias.reduce((total, dia) => total + dia.temperatura, 0);
    return totalTemperaturas / this.dias.length;
  }

  filtrarDiasLluviosos() {
    return this.dias.filter(dia => dia.precipitacion > 0);
  }

  encontrarDiaMasCalido() {
    return this.dias.reduce((maxDia, dia) =>
      dia.temperatura > maxDia.temperatura ? dia : maxDia
    );
  }
}
