import { Component } from '@angular/core';
import {Restaurante} from '../../models/restaurante.model';
import {Pedido} from '../../models/pedido.model';
import {Plato} from '../../models/plato.model';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-gestion-pedido',
  standalone: true,
  imports: [MatIconModule, FormsModule, NgForOf, CurrencyPipe, NgIf],
  templateUrl: './gestion-pedido.component.html',
})
export class GestionPedidoComponent {
  restaurante = new Restaurante();
  nuevoPedido: Pedido = new Pedido(0, '', []);
  clienteBusqueda: string = '';
  montoFiltro: number = 0;

  // Campos temporales para agregar platos
  platoId: number = 0;
  platoNombre: string = '';
  platoPrecio: number = 0;

  agregarPedido(): void {
    this.restaurante.agregarPedido(this.nuevoPedido);
    this.nuevoPedido = new Pedido(0, '', []);
  }

  buscarPedidos(): Pedido[] {
    return this.restaurante.buscarPedidosPorCliente(this.clienteBusqueda);
  }

  filtrarPedidos(): Pedido[] {
    return this.restaurante.filtrarPedidosPorTotal(this.montoFiltro);
  }

  calcularTotalVentas(): number {
    return this.restaurante.calcularTotalVentas();
  }

  agregarPlato(): void {
    const plato = new Plato(this.platoId, this.platoNombre, this.platoPrecio);
    this.nuevoPedido.platos.push(plato);
    this.platoId = 0;
    this.platoNombre = '';
    this.platoPrecio = 0;
  }
}
