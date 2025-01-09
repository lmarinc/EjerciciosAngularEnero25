import { Pedido } from './pedido.model';

export class Restaurante {
  pedidos: Pedido[] = [];

  agregarPedido(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }

  calcularTotalVentas(): number {
    return this.pedidos.reduce((total, pedido) => total + pedido.calculaTotal(), 0);
  }

  buscarPedidosPorCliente(cliente: string): Pedido[] {
    return this.pedidos.filter(pedido => pedido.cliente === cliente);
  }

  filtrarPedidosPorTotal(monto: number): Pedido[] {
    return this.pedidos.filter(pedido => pedido.calculaTotal() > monto);
  }
}
