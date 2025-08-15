Funciones de Arreglos en JS
En JavaScript, los arreglos son estructuras de datos muy utilizadas y ofrecen una variedad de funciones para manipularlos. Algunas de las funciones más comunes incluyen:

forEach(): Ejecuta una función para cada elemento del arreglo.
map(): Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento.
includes(): Determina si un arreglo incluye un elemento específico, devolviendo true o false.
filter(): Crea un nuevo arreglo con todos los elementos que cumplen una condición dada.
reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo para reducirlo a un único valor.
some(): Verifica si algún elemento de un arreglo cumple con una prueba dada.
every(): Verifica si todos los elementos de un arreglo pasan una prueba dada.
sort(): Ordena los elementos de un arreglo localmente.
Array.from(): Crea una nueva instancia de Array a partir de un objeto iterable.
Array.of(): Crea una nueva instancia de Array con el número indicado de elementos.
concat(), que combina dos arreglos o agrega elementos a uno existente 
push(), que agrega elementos al final de un arreglo 
pop(), que elimina el último elemento de un arreglo 
shift(), que elimina el primer elemento de un arreglo 
unshift(), que agrega elementos al inicio de un arreglo 
splice(), que permite agregar, eliminar o reemplazar elementos en un arreglo 
slice(), que devuelve una parte de un arreglo como un nuevo arreglo 
split(), que divide una cadena en subcadenas y las devuelve como un arreglo 
indexOf(), que busca un elemento en un arreglo y devuelve su índice 
lastIndexOf(), que devuelve el último índice donde se encuentra un elemento 

## Array.of()
```js
// ❌ Problema con new Array()
const arrayConfuso = new Array(5);
console.log(arrayConfuso); // Output: [ <5 empty slots> ] (no [5])

// ✅ Solución con Array.of()
const arrayCorrecto = Array.of(5);
console.log(arrayCorrecto); // Output: [5] (lo que esperábamos)

```

## Array.from()

El método Array.from() en JavaScript crea un nuevo array a partir de un objeto iterable (como una cadena, un Set, un NodeList, o un objeto con propiedad length) o un array-like (como arguments). También permite transformar los elementos durante la creación.

Ejemplos:

```js
//-->Convertir una cadena en un array de caracteres
const texto = "Hola";
const arrayDeLetras = Array.from(texto);

console.log(arrayDeLetras); 
// Output: ["H", "o", "l", "a"]

//-->convertir un set en un arreglo
const miSet = new Set([1, 2, 3, 3, 4]);
const arrayDesdeSet = Array.from(miSet);

console.log(arrayDesdeSet); 
// Output: [1, 2, 3, 4] (elimina duplicados)

//-->Trabajar con NodeList (DOM)
// Obtener todos los divs de una página y convertirlos en array
const divs = document.querySelectorAll("div");
const arrayDivs = Array.from(divs);

// Ahora puedes usar métodos de array como .map() o .filter()
arrayDivs.map(div => console.log(div.textContent));

//Usando la función de mapeo (segundo argumento)
const numeros = Array.from([1, 2, 3], x => x * 2);

console.log(numeros); 
// Output: [2, 4, 6]

//Generar un array de secuencias
// Crear un array con números del 0 al 4
const secuencia = Array.from({ length: 5 }, (_, index) => index);

console.log(secuencia); 
// Output: [0, 1, 2, 3, 4]

```

