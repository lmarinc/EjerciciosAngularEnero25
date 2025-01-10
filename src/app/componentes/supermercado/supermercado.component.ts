import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-supermercado',
  standalone: true,
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.css'],
  imports: [
    NgIf,
    NgForOf
  ]
})
export class SupermercadoComponent {
  productos = [
    { nombre: 'Manzana', precio: 5, categoria: 'alimentos' },
    { nombre: 'Cereal', precio: 12, categoria: 'alimentos' },
    { nombre: 'Detergente', precio: 15, categoria: 'limpieza' },
    { nombre: 'Shampoo', precio: 8, categoria: 'higiene' },
  ];

  productosCaros = () => this.productos.filter(producto => producto.precio > 10).map(p => p.nombre);

  precioPromedioAlimentos = () => {
    const alimentos = this.productos.filter(producto => producto.categoria === 'alimentos');
    const totalPrecio = alimentos.reduce((suma, producto) => suma + producto.precio, 0);
    return alimentos.length > 0 ? totalPrecio / alimentos.length : 0;
  };

  productosConDescuento = () =>
    this.productos.map(producto => ({
      ...producto,
      precio: +(producto.precio * 0.9).toFixed(2), // Aplicar descuento y redondear
    }));
}
