import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-clasificacion-palabras',
  standalone: true,
  templateUrl: './clasificacion-palabras.component.html',
  imports: [
    NgForOf,
    NgIf
  ]
})
export class ClasificacionPalabrasComponent {
  palabras = ['manzana', 'pera', 'melon', 'plátano', 'kiwi', 'fresa'];

  palabrasEnMayusculas = () => this.palabras.map(palabra => palabra.toUpperCase());

  palabrasLargas = () => this.palabras.filter(palabra => palabra.length > 5);

  palabrasOrdenadasPorLongitud = () =>
    [...this.palabras].sort((a, b) => b.length - a.length);
}
