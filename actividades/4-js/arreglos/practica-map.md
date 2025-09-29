# arreglos

creación de arreglos:

```js
const letters = ["a", "b", "c"];
const edades = [23,45,29,12];
const nombres = ["juan perez","luis uc","rosa puc","ana ruiz"];
```

## map

El método map() es una forma útil de iterar sobre un array y aplicar una función a cada elemento, devolviendo un nuevo array con los resultados. Esta función se conoce como callback y se pasa como argumento a map().

```js
const nuevoArray = arrayOriginal.map(function(item [, indice, array]) {
    return transformación; // ¡Siempre debe retornar algo!
});

```

Ejemplo:
```js
const numbers = [2, 3, 4, 5, 35];
const doubledNumbers = numbers.map(item => item * 2);
console.log(doubledNumbers); // [4, 6, 8, 10, 70]
```

### Ejercicio 1

Para un arreglo que contiene 10 compras, aplique un impuesto de 10% a cada compra y muestre.

### Ejercicio 2

Para un arreglo de 10 compras, aplique un decuento de 5% si la compra fue mayor de 500 pesos, muestre el resultado.

## foreach

```js
array.forEach(function(elemento, indice, array) {
  // código a ejecutar para cada elemento
});

```

Ejemplo:

```js
const frutas = ['manzana', 'banana', 'cereza'];

frutas.forEach(function(fruta, indice) {
  console.log(`${indice}: ${fruta}`);
});

// Salida:
// 0: manzana
// 1: banana
// 2: cereza
```