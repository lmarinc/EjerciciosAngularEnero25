export class Cliente {
  constructor(
    public id: number,
    public nombre: string,
    public saldo: number
  ) {}

  // Realizar un depósito
  realizarDeposito(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
    } else {
      console.log('El depósito debe ser un monto positivo');
    }
  }

  // Realizar un retiro
  realizarRetiro(monto: number): boolean {
    if (monto > 0 && monto <= this.saldo) {
      this.saldo -= monto;
      return true;
    } else {
      console.log('Fondos insuficientes o monto no válido');
      return false;
    }
  }

  // Mostrar el estado del cliente
  mostrarEstado(): string {
    return `Cliente: ${this.nombre} | Saldo: ${this.saldo}€`;
  }
}
