import * as readlineSync from 'readline-sync';

// Array inicial de palabras clave
let palabrasClave: string[] = ['JavaScript', 'TypeScript', 'Node', 'React', 'Angular'];

// Función para buscar una palabra clave y devolver su posición
function buscarPalabraClave(palabra: string): number {
  const index = palabrasClave.indexOf(palabra);
  return index >= 0 ? index : -1;  // Retorna -1 si no la encuentra
}

// Función para añadir una nueva palabra clave evitando duplicados
function añadirPalabraClave(palabra: string): void {
  // Solo la añade si no está ya en el array
  if (!palabrasClave.includes(palabra)) {
    palabrasClave.push(palabra);
    console.log(`La palabra clave "${palabra}" ha sido añadida.`);
  } else {
    console.log(`La palabra clave "${palabra}" ya existe en la biblioteca.`);
  }
}

// Función para ordenar las palabras clave alfabéticamente
function ordenarPalabrasClave(): void {
  palabrasClave.sort();
  console.log('Las palabras clave han sido ordenadas alfabéticamente.');
}

// Menú interactivo en consola
function mostrarMenu(): void {
  console.log('\n--- Menú de Biblioteca de Palabras Clave ---');
  console.log('1. Buscar palabra clave');
  console.log('2. Añadir nueva palabra clave');
  console.log('3. Ordenar palabras clave alfabéticamente');
  console.log('4. Ver todas las palabras clave');
  console.log('5. Salir');
}

function ejecutarOpcion(opcion: number): void {
  switch (opcion) {
    case 1:
      const palabraBuscar = readlineSync.question('Introduce la palabra clave a buscar: ');
      const index = buscarPalabraClave(palabraBuscar);
      if (index !== -1) {
        console.log(`La palabra clave "${palabraBuscar}" se encuentra en la posición ${index}.`);
      } else {
        console.log(`La palabra clave "${palabraBuscar}" no está en la biblioteca.`);
      }
      break;

    case 2:
      const nuevaPalabra = readlineSync.question('Introduce la nueva palabra clave a añadir: ');
      añadirPalabraClave(nuevaPalabra);
      break;

    case 3:
      ordenarPalabrasClave();
      break;

    case 4:
      console.log('\nPalabras clave en la biblioteca:');
      palabrasClave.forEach((palabra, index) => {
        console.log(`${index + 1}. ${palabra}`);
      });
      break;

    case 5:
      console.log('¡Hasta luego!');
      process.exit();
      break;

    default:
      console.log('Opción no válida. Por favor, elige una opción válida.');
      break;
  }
}

// Función principal que ejecuta el menú y las opciones seleccionadas
function iniciarPrograma(): void {
  while (true) {
    mostrarMenu();
    const opcion = readlineSync.questionInt('Selecciona una opción: ');
    ejecutarOpcion(opcion);
  }
}

// Iniciar el programa
iniciarPrograma();
