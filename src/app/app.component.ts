import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CatalogoComponent} from './componentes/catalogo/catalogo.component';
import {GestionPedidoComponent} from './componentes/gestion-pedido/gestion-pedido.component';
import {AnalisisMeteorologicoComponent} from './componentes/analisis-meterologico/analisis-meterologico.component';
import {BancoComponent} from './componentes/banco/banco.component';
import {GestionZooComponent} from './componentes/gestion-zoo/gestion-zoo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatalogoComponent, GestionPedidoComponent, AnalisisMeteorologicoComponent, BancoComponent, GestionZooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
}
