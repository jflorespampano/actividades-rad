# herramientas

Para este curso se recomienda usar/instalar las siguientes herramientas

* telegram (para comunicación con el profesor[mensajes urgentes]), por este medio se publicaran avisos y calificaciones
* [navaja suiza para desarrolladores](https://devtoys.app/)
* [git](https://git-scm.com/)
* [deep seek](https://www.deepseek.com)
* [probar la ia kimi (en chino)](https://kimi.moonshot.cn/)
* GitHub
* Git
* [Notion](https://www.notion.com/es)
* [VSCODE](https://code.visualstudio.com/) editor de código libre
* En vscode instalar los compementos
    * ES7+ React/Redux/React-Native snippets
    * ESLint
    * GitHub Copilot
    * Markmap
    * Prettier - Code formatter
    * SQLite Viewer
    * Thunder Client
    * Rest Client
    * vscode-pdf
    * Turbo Console Log
* Opcionalmente a "Thunder Client o Rest Client" puede usar "insomnia" o "postman"
* Herramientas en línea
    * [github](https://github.com/)
    * [validar json](https://jsonlint.com/)
    * [Excalidraw](https://excalidraw.com/)
    * [probar css en linea](https://codi.link/%7C%7C)
    * [color piker](https://www.w3schools.com/colors/colors_picker.asp)
    * [caja de herramientas](https://omatsuri.app/)

## habilidades requeridas

* atajos de vscode
* manejo de git bash
* escritura en [mark down](https://markdown.es/sintaxis-markdown/)
* manejo de base de datos relacionales
* manejo de curl
* manejo de github
* manejo de github proyectos (issues, milestones)
* manejo de sqlitestudio/sqliteadmin

## ligas css

[probar css en linea](https://codi.link/%7C%7C)

[calculador de especificidad] (https://specificity.keegan.st/)

[manz](https://lenguajecss.com/)

[web.dev aprender css](https://web.dev/learn/css?hl=es)

[css](https://developer.mozilla.org/es/docs/Web/CSS)

[z-index](https://web.dev/learn/css/z-index?hl=es)

[retors css](https://www.frontendmentor.io/)

### font-awesome

Font Awesome es la biblioteca de iconos más popular del mundo que permite agregar iconos vectoriales escalables a tus proyectos web usando CSS y HTML.

Para usar los iconos, cargue la siguiente biblioteca en el head de su HTML:

```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

```
Busque el ícono en: [buscar iconos](https://fontawesome.com/icons)

En el cuadro de busueda ponga por ejemplo 'truck', seleccione el ícono deseado y copie el código generado:

```html
<i class="fa-solid fa-truck-medical"></i>
```

## color piker

[color piker](https://www.w3schools.com/colors/colors_picker.asp)

[image color piker](https://imagecolorpicker.com/)

[color piker](https://rgbcolorpicker.com/)

[oklch](https://oklch.com/#70,0.1,89,100)

## iconos Bootstrap

[iconos](https://icons.getbootstrap.com/?q=clos)

## imagenes svg

[gallery](https://pixels.market/)

[fotografias](https://unsplash.com/documentation)

## Data Fake

### Mokaro
Crear hasta mil  registros json falsos.
[mokaro](https://www.mockaroo.com/)
**formatear json en vscode:** Windows/Linux: Ctrl + K + Ctrl + F

### omatsuri.app

taambien permite generar datafake en json en:

[data fake generator](https://omatsuri.app/fake-data-generator)

### MockApi

* Plataforma online para crear APIs REST falsas
* Base de datos en la nube con interfaz web
* Gratis (con límites)
* URL única para tu API

### usar MockApi

Paso 1: Crear una cuenta y proyecto
Ve a mockapi.io
Regístrate (con Google o email)
Haz clic en "New Project"
Crear tu primer recurso (ej: usuarios)
...

### api con jsonserver

```sh
# 1. Instalar
npm install -g json-server

# 2. Crear db.json
{
  "users": [
    { "id": 1, "name": "Ana", "email": "ana@mail.com" },
    { "id": 2, "name": "Carlos", "email": "carlos@mail.com" }
  ],
  "posts": [
    { "id": 1, "title": "Mi primer post", "userId": 1 }
  ]
}

# 3. Iniciar servidor
json-server --watch db.json --port 3001


# 3. Iniciar servidor
json-server --watch db.json --port 3001

# En la nueva version se pude omitir --watch
json-server db.json --port 3001
```
Ahora tienes una API completa:

GET http://localhost:3001/users
POST http://localhost:3001/users
GET http://localhost:3001/users/1
GET http://localhost:3001/posts?userId=1

## Ligas

[Generador de dataFakes](https://www.mockaroo.com/)
[Data fakes](https://jsonplaceholder.typicode.com/)
[datos falsos](https://gorest.co.in/)
[poke api](https://pokeapi.co/)
[MockAPI-creador de fake api](https://mockapi.io/)
[Extension para visualizar mejor los json](https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?pli=1)
[caja de herramientas](https://omatsuri.app/)
