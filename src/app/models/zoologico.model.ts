import { Animal } from './animal.model';

export class Zoologico {
  animales: Animal[] = [];

  agregarAnimal(animal: Animal): void {
    this.animales.push(animal);
  }

  buscarAnimalesPorEspecie(especie: string): Animal[] {
    return this.animales.filter(animal => animal.especie.toLowerCase() === especie.toLowerCase());
  }

  mostrarAnimalesPorHabitat(habitat: string): Animal[] {
    return this.animales.filter(animal => animal.habitat.toLowerCase() === habitat.toLowerCase());
  }
}
