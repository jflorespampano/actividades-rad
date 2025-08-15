# actividad 1

* abra [abra](https://codi.link/%7C%7C)
* en el área html, copie el siguiente código html:
```html
<div class="main">
        <h1>Curriculum</h1>
        <p>This is the curriculum page.</p>
        <p>Here you can find the details of the Languages and frameworks.</p>
        <div class="section resumen">
            <h2>Summary</h2>
            <p>This curriculum provides a comprehensive overview of essential topics in computer science, designed to equip students with the necessary skills for a career in technology.</p>
        </div>
        <div class="section lenguajes">
            <h2>Languages</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        </div>
        
    </div>
    <div class="footer">
        <p>&copy; 2023 Your name. Your mail.</p>  
    </div>
```
* En el área de css agregue los estilos:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}
```
Vea el resultado, pruebe cambiando el margen y el pading a 15px.
Vea el resultado, regrese el mrgen y padding a 0.

* agregue los estilos:
```css
.main {
    width: 80%;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
```

El box-shadow tiene los parámetros: /* offset-x | offset-y | difuminación | color */
rgba(red, green, blue, alpha) alpha The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all).

Pruebe cambiando margin a left, y width a 50%.

## actividad 1.2

* abra [abra](https://codi.link/%7C%7C)
* en el área html, copie el siguiente código html:

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

Explica el código css a tu profesor.


