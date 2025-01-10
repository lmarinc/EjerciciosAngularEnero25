export class Vehiculo {
  constructor(public marca: string, public modelo: string, public anio: number) {}

  mostrarDetalles(): string {
    return `Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.anio}`;
  }
}

export class Coche extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    anio: number,
    public numeroDePuertas: number
  ) {
    super(marca, modelo, anio);
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()} | Número de puertas: ${this.numeroDePuertas}`;
  }
}

export class Motocicleta extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    anio: number,
    public tipoDeManillar: string
  ) {
    super(marca, modelo, anio);
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()} | Tipo de manillar: ${this.tipoDeManillar}`;
  }
}
