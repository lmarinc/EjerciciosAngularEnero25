export class Animal {
  constructor(
    public especie: string,
    public nombre: string,
    public edad: number,
    public habitat: string
  ) {}

  cambiarHabitat(nuevoHabitat: string): void {
    this.habitat = nuevoHabitat;
  }

  incrementarEdad(): void {
    this.edad += 1;
  }

  mostrarInformacion(): string {
    return `Nombre: ${this.nombre} | Edad: ${this.edad} | Especie: ${this.especie} | Hábitat: ${this.habitat}`;
  }
}
