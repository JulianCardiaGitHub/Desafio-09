import './style.css';

//! 1. Inventario de Frutas: Crea un array llamado frutas con al menos 5 frutas. Utiliza pop para eliminar la última fruta y mostrarla por consola. Luego, usa push para agregar "mango" al final del array.

const frutas = ['manzana', 'banana', 'naranja', 'pera', 'uva'];
console.log(frutas);

const frutaEliminada = frutas.pop();
console.log(frutaEliminada);

frutas.push('mango');

console.log(frutas);

//! 2. Lista de Tareas: Declara un array tareas con 3 tareas pendientes. Usa shift para eliminar la primera tarea y mostrarla por consola como "Tarea completada".  Añade una nueva tarea al principio del array con unshift.

const tareasHogar = ['lavar los platos', 'hacer la cama', 'sacar la basura'];

const tareaHogarCompletada = tareasHogar.shift();
console.log(`Tarea completada: ${tareaHogarCompletada}`);

tareasHogar.unshift('comprar comida');

console.log(tareasHogar);

//! 3. Fila de Espera: Simula una fila de espera con un array clientes.  Añade 2 nuevos clientes al final de la fila con push.  Atiende al primer cliente usando shift y muestra su nombre por consola.

const clientes = ['jorge', 'Gaston', 'Maria'];

clientes.push('Jose', 'Carlos');

console.log(clientes);

const clienteAtendido = clientes.shift();
console.log(`Cliente atendido: ${clienteAtendido}`);

console.log(clientes);

//! 4. Rotación de Elementos: Crea un array numeros con 5 números. Utiliza pop para sacar el último número y luego unshift para agregarlo al principio. Repite este proceso 3 veces y observa cómo cambian las posiciones.

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < 3; i++) {
  const numero = numeros.pop();
  numeros.unshift(numero);
  console.log(numeros);
}

//! 5. Carrito de Compras:  Declara un array carrito vacío. Permite al usuario agregar 3 productos al carrito con push. Luego, dale la opción de eliminar el último producto agregado usando pop.

const carrito = [];
{
  carrito.push('Anteojos');
  carrito.push('Mochila');
  carrito.push('Guantes');
}
console.log(carrito);

const productoEliminado = carrito.pop(2);
console.log(`Producto eliminado: ${productoEliminado}`);

console.log(carrito);

/*----------------------------------------------------*/
/* Resolver según corresponda y según lo indicado. */
/*-------------------------------------------------------------*/

//! 6. (map) Doblar Valores:  Dado un array valores con números, crea un nuevo array dobles donde cada elemento sea el doble del valor original usando map.

const valores = [1, 2, 3, 4, 5];
const dobles = valores.map((valor) => valor * 2);
console.log(dobles);

//! 7. (map) Nombres en Mayúsculas: Convierte todos los nombres de un array nombres a mayúsculas utilizando map.

const nombres = ['Juan', 'María', 'Pedro'];
const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);

//! 8. (map) Precios con IVA:  Tienes un array precios con precios sin IVA. Calcula un nuevo array precios Con IVA donde cada precio incluya un IVA del 21%.

const precios = [100, 200, 300];
console.log(precios);
const preciosConIVA = precios.map((precio) => precio * 1.21);
console.log(preciosConIVA);

//! 9. (map) Cuadrados de Números:  Crea un array numeros del 1 al 10. Obtén un nuevo array cuadrados donde cada elemento sea el cuadrado del número original.

const numeroCuadrado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeroCuadrado);

const cuadrados = numeroCuadrado.map(
  (numerosCuadrados) => numerosCuadrados * numerosCuadrados,
);

console.log(cuadrados);

//! 10. (filter) Números Pares:  Filtra un array numeros para obtener solo los números pares.

const numerosp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerosp);
const numerosPares = numerosp.filter((numero) => numero % 2 === 0);

console.log(numerosPares);

//! 11. (filter) Palabras Largas:  Encuentra las palabras de más de 5 letras en un array palabras.

const palabras = ['casa', 'perro', 'computadora', 'libro'];
console.log(palabras);
const palabrasLargas = palabras.filter((palabra) => palabra.length > 5);
console.log(palabrasLargas);

//! 12. (filter) Productos en Oferta:  Tienes un array productos con objetos que tienen propiedades nombre y precio. Filtra los productos que estén en oferta (precio menor a $500).

const productos = [
  { nombre: 'Laptop', precio: 600 },
  { nombre: 'Teléfono', precio: 400 },
  { nombre: 'Tablet', precio: 300 },
];
console.log(productos);
const productosEnOferta = productos.filter((producto) => producto.precio < 500);
console.log(productosEnOferta);

//! 13. (filter) Estudiantes Aprobados:  Filtra un array estudiantes (objetos con propiedades nombre y nota) para obtener solo a los estudiantes con notas mayores o iguales a 7.

const estudiantes = [
  { nombre: 'Juan', nota: 9 },
  { nombre: 'María', nota: 4 },
  { nombre: 'Pedro', nota: 7 },
];
console.log(estudiantes);
const estudiantesAprobados = estudiantes.filter(
  (estudiante) => estudiante.nota >= 7,
);
console.log(estudiantesAprobados);

//! 14. (filter) Tareas Completadas:  Dado un array tareas (objetos con propiedades descripcion y completada), filtra las tareas que estén marcadas como completadas.

const tareas = [
  { descripcion: 'Lavar los platos', completada: true },
  { descripcion: 'Sacar la basura', completada: false },
  { descripcion: 'Hacer la cama', completada: true },
  { descripcion: 'Comprar comida', completada: false },
];
console.log(tareas);
const tareasCompletadas = tareas.filter((tarea) => tarea.completada);

console.log(tareasCompletadas);

//! 15. (forEach) Mostrar Lista: Imprime por consola cada elemento de un array nombres utilizando forEach.

const name = ['Juan', 'Ana', 'Carlos', 'Maria'];

name.forEach((name) => {
  console.log(name);
});

//! 16. (forEach) Sumar Edades:  Calcula la suma de las edades de un array edades usando forEach.

const edades = [25, 30, 35, 40];
console.log(edades);
let sumaEdades = 0;
edades.forEach((edad) => {
  sumaEdades += edad;
});

console.log(sumaEdades);

//! 17. (forEach) Aplicar Descuento:  Tienes un array productos (objetos con nombre y precio). Aplica un descuento del 10% a cada producto usando forEach.

const products = [
  { nombre: 'Camisa', precio: 20 },
  { nombre: 'Pantalón', precio: 30 },
  { nombre: 'Zapatos', precio: 50 },
];

products.forEach((products) => {
  products.precio *= 0.9;
});

console.log(products);

//! 18. (forEach) Enviar Invitaciones:  Simula el envío de invitaciones por correo electrónico a cada persona de un array invitados utilizando forEach (puedes imprimir un mensaje de "Invitación enviada a [nombre]" por consola).

const invitados = ['Luis', 'Carla', 'Pedro', 'Marta'];

invitados.forEach((invitado) => {
  console.log(`Invitación enviada a ${invitado}`);
});
