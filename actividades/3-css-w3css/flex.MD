# flex

Cómo funciona Flexbox en CSS
Flexbox (o Flexible Box Layout Module) es un modelo de diseño en CSS que permite diseñar layouts flexibles y responsivos de manera eficiente. Aquí te explico cómo funciona:

Conceptos básicos
Flexbox trabaja con dos ejes:

Eje principal (main axis): Por defecto es horizontal (de izquierda a derecha)

Eje transversal (cross axis): Por defecto es vertical (de arriba a abajo)

Contenedor flex (flex container)
Para activar flexbox, debes aplicar display: flex o display: inline-flex a un elemento contenedor:

```css
.contenedor {
  display: flex; /* o inline-flex */
  display: inline-flex;
}
```

Propiedades del contenedor flex
1. Dirección del flujo (flex-direction)
Controla la dirección del eje principal:

```css
.contenedor {
  flex-direction: row; /* Predeterminado - izquierda a derecha */
  flex-direction: row-reverse; /* Derecha a izquierda */
  flex-direction: column; /* Arriba a abajo */
  flex-direction: column-reverse; /* Abajo a arriba */
}
```

2. Ajuste de línea (flex-wrap)
Controla si los elementos deben envolverse cuando no caben:

```css
.contenedor {
  flex-wrap: nowrap; /* Predeterminado - todos en una línea */
  flex-wrap: wrap; /* Envuelve en múltiples líneas */
  flex-wrap: wrap-reverse; /* Envuelve en orden inverso */
}
```

3. Alineación en el eje principal (justify-content)
Distribuye el espacio a lo largo del eje principal:

```css
.contenedor {
  justify-content: flex-start; /* Predeterminado - al inicio */
  justify-content: flex-end; /* Al final */
  justify-content: center; /* Centrado */
  justify-content: space-between; /* Espacio entre elementos */
  justify-content: space-around; /* Espacio alrededor de elementos */
  justify-content: space-evenly; /* Espacio distribuido uniformemente */
}
```

4. Alineación en el eje transversal (align-items)
Alinea los elementos en el eje transversal:

```css
.contenedor {
  align-items: stretch; /* Predeterminado - estira para llenar */
  align-items: flex-start; /* Al inicio */
  align-items: flex-end; /* Al final */
  align-items: center; /* Centrado */
  align-items: baseline; /* Alineado por la línea base del texto */
}
```

5. Alineación de líneas múltiples (align-content)
Similar a justify-content pero para líneas múltiples:

```css
.contenedor {
  align-content: stretch; /* Predeterminado */
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
}
```

Propiedades de los elementos flex (flex items)
1. Orden (order)
Controla el orden de visualización:

```css
.item {
  order: 0; /* Predeterminado */
  order: 1; /* Mayor número = más al final */
  order: -1; /* Número negativo = más al inicio */
}
```

2. Capacidad de crecimiento (flex-grow)
Controla cuánto puede crecer un elemento si hay espacio disponible:

```css
.item {
  flex-grow: 0; /* Predeterminado - no crece */
  flex-grow: 1; /* Toma espacio disponible */
}
```

3. Capacidad de reducción (flex-shrink)
Controla cuánto puede reducirse un elemento si no hay espacio:

```css
.item {
  flex-shrink: 1; /* Predeterminado - se reduce si es necesario */
  flex-shrink: 0; /* No se reduce */
}
```

4. Tamaño base (flex-basis)
Define el tamaño inicial de un elemento antes de que se distribuya el espacio restante:

```css
.item {
  flex-basis: auto; /* Predeterminado - usa width/height */
  flex-basis: 200px; /* Tamaño fijo */
  flex-basis: 20%; /* Porcentaje del contenedor */
}
```

Atajo (flex)
Combina flex-grow, flex-shrink y flex-basis:

```css
.item {
  flex: 0 1 auto; /* Predeterminado */
  flex: 1; /* Equivale a flex: 1 1 0 */
  flex: 200px; /* Equivale a flex: 1 1 200px */
}
```

Alineación individual (align-self)
Permite sobreescribir align-items para un elemento específico:

```css
.item {
  align-self: auto; /* Predeterminado - hereda de align-items */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: baseline;
  align-self: stretch;
}
```
## ejeplo práctico de un menú

```html
<nav>
    <ul>
      <li>
        <a href="#">HTML</a></li>
      <li>
        <a href="#">CSS</a></li>
      <li>
        <a href="#">JS</a></li>
      <li>
        <a href="#">C</a></li>
      <li>
        <a href="#">C#</a></li>
    </ul>
</nav>

```

```css
li{
  list-style-type: none;
}
nav{
  max-width: 90%;
  background-color: #2c3e50;
  padding: 3px 0px;
  display: block;
}

ul{
  display: flex;
}
li{
  margin-left: 10px;
}
li>a{
  color:#ecf0f1;
  text-decoration: none;
  padding: 0.5rem;
}
li>a:hover{
  background-color: #3498db;
}
```

## Ejemplo prático del uso de flex

html:
```html
<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

css:
```css
.contenedor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  border: 1px solid #333;
}

.item {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}

.item:nth-child(2) {
  align-self: flex-end;
  order: -1;
}
```

Flexbox es especialmente útil para:

Centrado vertical y horizontal fácil

Diseños responsivos sin media queries complejos

Distribución equitativa de espacio

Reordenamiento visual independiente del orden del HTML

##  ligaas

[manz](https://lenguajecss.com/css/flex/que-es-flex/)