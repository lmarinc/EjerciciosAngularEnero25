import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

interface Pelicula {
  titulo: string;
  director: string;
  anio: number;
  genero: string;
  calificacion: number;
}

interface Genero {
  nombre: string;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  imports: [
    NgForOf,
    MatIcon
  ]
})
export class CatalogoComponent {
  peliculas: Pelicula[] = [
    { titulo: 'El Padrino', director: 'Francis Ford Coppola', anio: 1972, genero: 'Drama', calificacion: 9 },
    { titulo: 'Pulp Fiction', director: 'Quentin Tarantino', anio: 1994, genero: 'Crimen', calificacion: 8 },
    { titulo: 'El Caballero de la Noche', director: 'Christopher Nolan', anio: 2008, genero: 'Acción', calificacion: 10 },
    { titulo: 'Forrest Gump', director: 'Robert Zemeckis', anio: 1994, genero: 'Drama', calificacion: 8 },
    { titulo: 'Inception', director: 'Christopher Nolan', anio: 2010, genero: 'Ciencia Ficción', calificacion: 9 },
  ];

  generos: Genero[] = [
    { nombre: 'Drama' },
    { nombre: 'Crimen' },
    { nombre: 'Acción' },
    { nombre: 'Ciencia Ficción' },
  ];

  generoSeleccionado: string = '';
  resultadosBusqueda: Pelicula[] = [];

  get mejoresCalificadas(): Pelicula[] {
    return this.peliculas
      .sort((a, b) => b.calificacion - a.calificacion)
      .slice(0, 3);
  }

  get calificacionPromedio(): number {
    const total = this.peliculas.reduce((sum, pelicula) => sum + pelicula.calificacion, 0);
    return +(total / this.peliculas.length).toFixed(2);
  }

  buscarPorGenero(genero: string): void {
    this.generoSeleccionado = genero;
    this.resultadosBusqueda = this.peliculas.filter(
      pelicula => pelicula.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  cambiarCalificacion(pelicula: Pelicula): void {
    const nuevaCalificacion = prompt(`Nueva calificación para \"${pelicula.titulo}\" (1-10):`, pelicula.calificacion.toString());
    if (nuevaCalificacion !== null) {
      const calificacionNumerica = parseInt(nuevaCalificacion, 10);
      if (!isNaN(calificacionNumerica) && calificacionNumerica >= 1 && calificacionNumerica <= 10) {
        pelicula.calificacion = calificacionNumerica;
        alert(`Calificación de \"${pelicula.titulo}\" actualizada a ${pelicula.calificacion}`);
      } else {
        alert('Por favor, ingrese un número válido entre 1 y 10.');
      }
    }
  }
}
