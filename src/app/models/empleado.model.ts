export class Empleado {
  constructor(
    public nombre: string,
    public apellido: string,
    public salario: number
  ) {}

  mostrarDetalles(): string {
    return `Empleado: ${this.nombre} ${this.apellido} | Salario base: ${this.salario}€`;
  }
}

export class EmpleadoTiempoCompleto extends Empleado {
  constructor(
    nombre: string,
    apellido: string,
    salario: number,
    public horasExtras: number,
    public bonoPorHoraExtra: number
  ) {
    super(nombre, apellido, salario);
  }

  calcularSalario(): number {
    return this.salario + this.horasExtras * this.bonoPorHoraExtra;
  }

  override mostrarDetalles(): string {
    return `${super.mostrarDetalles()} | Horas extras: ${this.horasExtras} | Salario total: ${this.calcularSalario()}€`;
  }
}

export class EmpleadoPorHoras extends Empleado {
  constructor(
    nombre: string,
    apellido: string,
    public tarifaPorHora: number,
    public horasTrabajadas: number
  ) {
    super(nombre, apellido, 0); // El salario base se calcula con tarifa por hora
  }

  calcularSalario(): number {
    return this.tarifaPorHora * this.horasTrabajadas;
  }

  override mostrarDetalles(): string {
    return `Empleado: ${this.nombre} ${this.apellido} | Tarifa por hora: ${this.tarifaPorHora}€ | Horas trabajadas: ${this.horasTrabajadas} | Salario total: ${this.calcularSalario()}€`;
  }
}
