Ejercicios

1. innerhtml probar index con script0.js
```js
let div = document.getElementById('miDiv');
div.innerHTML = '<strong>¡Hola desde JavaScript!</strong>';
```
2. queryselector probar index con script1.js
```js
let div = document.querySelector('miDiv');
div.innerHTML = '<strong>¡Hola desde JavaScript!</strong>';
```
3. filter probar index con script2.js
```js
let nuevoArray = array.filter(function(elemento, indice, array) {
  // condición de prueba, return true para mantener el elemento, false para descartarlo
});
```
4. forEach probar index con script3.js
```js
array.forEach(function(elemento, indice, array) {
  // código a ejecutar para cada elemento
});
```
5. llenar tabla probar index2
6. settimeof probar settimeof.html
```js
// let timeoutID = setTimeout(functionRef, delay, param1, param2, ...);
// Example 1: Using an anonymous function
setTimeout(() => {
  console.log("This message appears after 3 seconds.");
}, 3000);

// Example 2: Using a predefined function
function greet() {
  console.log("Hello!");
}
setTimeout(greet, 2000); // Note: pass the function itself, don't call it with greet()

// Example 3: Passing arguments
function greetByName(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greetByName, 1500, "Alice"); // Will print: "Hello, Alice!" after 1.5 seconds
```
7. promesas probar indexpromise.html
```js
const miPromesa = new Promise((resolve, reject) => {
  // Lógica asíncrona aquí
  // Si todo sale bien, llamamos a resolve(value)
  // Si hay un error, llamamos a reject(reason)
});
```
Ejemplo de promesa:
```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true; // Simulamos que la operación fue exitosa
    if (exito) {
      resolve("¡Datos obtenidos con éxito!");
    } else {
      reject("Error: No se pudieron obtener los datos");
    }
  }, 2000);
});

promesa
  .then((mensaje) => {
    console.log(mensaje); // Se ejecuta si la promesa se resuelve
  })
  .catch((error) => {
    console.error(error); // Se ejecuta si la promesa es rechazada
  })
  .finally(() => {
    console.log("La operación ha terminado"); // Siempre se ejecuta
  });
```
8. fetch probar indexfetch.html
