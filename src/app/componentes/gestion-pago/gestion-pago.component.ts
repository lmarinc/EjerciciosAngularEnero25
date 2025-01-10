import { Component } from '@angular/core';
import { Pago, PagoConTarjeta, PagoConPaypal } from '../../models/pago.model';

@Component({
  selector: 'app-gestion-pago',
  templateUrl: './gestion-pago.component.html',
})
export class GestionPagoComponent {
  mensaje: string = new Pago().procesarPago();

  procesarPagoConTarjeta() {
    this.mensaje = new PagoConTarjeta().procesarPago();
  }

  procesarPagoConPaypal() {
    this.mensaje = new PagoConPaypal().procesarPago();
  }
}
