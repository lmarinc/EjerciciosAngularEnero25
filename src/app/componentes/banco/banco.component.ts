import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { Banco } from '../../models/banco.model';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-banco',
  standalone: true,
  imports: [MatIconModule, FormsModule, NgForOf, CurrencyPipe, NgIf],
  templateUrl: './banco.component.html',
})
export class BancoComponent {
  banco: Banco = new Banco();
  nuevoCliente: Cliente = new Cliente(0, '', 0);
  clienteSeleccionado: Cliente | null = null;
  montoDeposito: number = 0;
  montoRetiro: number = 0;

  // Agregar un nuevo cliente
  agregarCliente(): void {
    if (this.nuevoCliente.nombre && this.nuevoCliente.saldo >= 0) {
      this.nuevoCliente.id = this.banco.obtenerClientes().length + 1; // Asignar un ID único
      this.banco.agregarCliente(this.nuevoCliente);
      this.nuevoCliente = new Cliente(0, '', 0); // Limpiar los campos
    }
  }

  // Seleccionar un cliente
  seleccionarCliente(cliente: Cliente): void {
    this.clienteSeleccionado = cliente;
  }

  // Realizar un depósito
  realizarDeposito(): void {
    if (this.clienteSeleccionado) {
      this.clienteSeleccionado.realizarDeposito(this.montoDeposito);
    }
  }

  // Realizar un retiro
  realizarRetiro(): void {
    if (this.clienteSeleccionado) {
      this.clienteSeleccionado.realizarRetiro(this.montoRetiro);
    }
  }

  // Calcular el saldo total del banco
  calcularSaldoTotal(): number {
    return this.banco.calcularSaldoTotal();
  }

  // Obtener todos los clientes del banco
  obtenerClientes(): Cliente[] {
    return this.banco.obtenerClientes();
  }
}
