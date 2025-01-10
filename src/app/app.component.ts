import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CatalogoComponent} from './componentes/catalogo/catalogo.component';
import {GestionPedidoComponent} from './componentes/gestion-pedido/gestion-pedido.component';
import {AnalisisMeteorologicoComponent} from './componentes/analisis-meterologico/analisis-meterologico.component';
import {BancoComponent} from './componentes/banco/banco.component';
import {GestionZooComponent} from './componentes/gestion-zoo/gestion-zoo.component';
import {SupermercadoComponent} from './componentes/supermercado/supermercado.component';
import {ClasificacionPalabrasComponent} from './componentes/clasificacion-palabras/clasificacion-palabras.component';
import { GestionVehiculoComponent,} from './componentes/gestion-vehiculo/gestion-vehiculo.component';
import {GestionEmpleadoComponent} from './componentes/gestion-empleado/gestion-empleado.component';
import {GestionFigurasComponent} from './componentes/gestion-figuras/gestion-figuras.component';
import {GestionPagoComponent} from './componentes/gestion-pago/gestion-pago.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatalogoComponent, GestionPedidoComponent, AnalisisMeteorologicoComponent, BancoComponent, GestionZooComponent, SupermercadoComponent, ClasificacionPalabrasComponent, GestionVehiculoComponent, GestionEmpleadoComponent, GestionFigurasComponent, GestionPagoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
}
