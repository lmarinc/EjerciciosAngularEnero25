import { Component } from '@angular/core';
import { Figura, Rectangulo, Circulo ,calcularAreas} from '../../models/figura.model';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-gestion-figuras',
  standalone: true,
  templateUrl: './gestion-figuras.component.html',
  imports: [
    NgIf,
    NgForOf,
    DecimalPipe
  ]
})
export class GestionFigurasComponent {
  figuras: Figura[] = [];
  areas: number[] = [];

  constructor() {
    this.figuras = [
      new Rectangulo(10, 5),
      new Rectangulo(6, 8),
      new Circulo(7),
      new Circulo(3),
    ];
    this.calcularAreasFiguras();
  }

  calcularAreasFiguras(): void {
    this.areas = this.figuras.map((figura) => figura.calcularArea());
  }


  esRectangulo(figura: Figura): figura is Rectangulo {
    return figura instanceof Rectangulo;
  }

  esCirculo(figura: Figura): figura is Circulo {
    return figura instanceof Circulo;
  }
}
