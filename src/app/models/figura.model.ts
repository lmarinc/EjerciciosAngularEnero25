export class Figura {
  calcularArea(): number {
    return 0; // Por defecto, no se calcula un área específica
  }
}

export class Rectangulo extends Figura {
  constructor(public base: number, public altura: number) {
    super();
  }

  override calcularArea(): number {
    return this.base * this.altura;
  }
}

export class Circulo extends Figura {
  constructor(public radio: number) {
    super();
  }

  override calcularArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

export function calcularAreas(figuras: Figura[]): number[] {
  return figuras.map((figura) => figura.calcularArea());
}
