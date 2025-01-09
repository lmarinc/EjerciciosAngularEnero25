import { Component } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { Zoologico } from '../../models/zoologico.model';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-gestion-zoo',
  standalone: true,
  imports: [MatIconModule, FormsModule, NgForOf, CurrencyPipe, NgIf],
  templateUrl: './gestion-zoo.component.html',
})
export class GestionZooComponent {
  zoologico = new Zoologico();
  nuevoAnimal: Animal = new Animal('', '', 0, '');
  especies: string[] = [];
  habitats: string[] = [];
  especieSeleccionada: string = 'TODOS';
  habitatSeleccionado: string = 'TODOS';

  // Ejemplos de animales en el zoológico
  ejemploAnimales = [
    new Animal('León', 'Simba', 4, 'Sabana'),
    new Animal('Tigre', 'Bony', 5, 'Selva'),
    new Animal('Elefante', 'Dumbo', 7, 'Sabana'),
    new Animal('Panda', 'Po', 3, 'Bosque de bambú'),
  ];

  constructor() {
    // Cargar algunos animales de ejemplo al inicio
    this.ejemploAnimales.forEach(animal => this.zoologico.agregarAnimal(animal));
    this.actualizarListas();
  }

  agregarAnimal(): void {
    this.zoologico.agregarAnimal(this.nuevoAnimal);
    this.nuevoAnimal = new Animal('', '', 0, ''); // Resetear formulario después de agregar
    this.actualizarListas();
  }

  buscarAnimalesPorEspecie(): Animal[] {
    if (this.especieSeleccionada === 'TODOS') {
      return this.zoologico.animales;
    }
    return this.zoologico.buscarAnimalesPorEspecie(this.especieSeleccionada);
  }

  mostrarAnimalesPorHabitat(): Animal[] {
    if (this.habitatSeleccionado === 'TODOS') {
      return this.zoologico.animales;
    }
    return this.zoologico.mostrarAnimalesPorHabitat(this.habitatSeleccionado);
  }

  actualizarListas(): void {
    this.especies = ['TODOS', ...new Set(this.zoologico.animales.map(animal => animal.especie))];
    this.habitats = ['TODOS', ...new Set(this.zoologico.animales.map(animal => animal.habitat))];
  }
}
