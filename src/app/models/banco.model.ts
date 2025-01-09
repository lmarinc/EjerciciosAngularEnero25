import { Cliente } from './cliente.model';

export class Banco {
  private clientes: Cliente[] = [];

  // Agregar un cliente al banco
  agregarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  // Buscar un cliente por id
  buscarClientePorId(id: number): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }

  // Calcular el saldo total del banco
  calcularSaldoTotal(): number {
    return this.clientes.reduce((total, cliente) => total + cliente.saldo, 0);
  }

  // Obtener todos los clientes
  obtenerClientes(): Cliente[] {
    return this.clientes;
  }
}
