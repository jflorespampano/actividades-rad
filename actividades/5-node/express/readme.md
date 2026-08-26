# usar express

Biblioteca para manejo de peticiones http. Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros framework s web de Node populares. Proporciona mecanismos para:

1. Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
2. Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
3. Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
4. Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.

A pesar de que Express es en sí mismo bastante minimalista, los desarrolladores han creado paquetes de middleware compatibles para abordar casi cualquier problema de desarrollo web. Hay librerías para trabajar con cookies, sesiones, inicios de sesión de usuario, parámetros URL, datos POST, cabeceras de seguridad y muchos más. Puedes encontrar una lista de paquetes middleware mantenida por el equipo de Express en Express Middleware (junto con una lista de algunos de los paquetes más populares de terceros).

## Cargar express en su proyecto
```sh
#iniciar proyecto con los valores de default
npm init -y
#cargar express
npm i express
```

Agregar la entrada: "type":"module", al package.json, así:
```json
{
  "name": "servidor express",
  "version": "1.0.0",
  "description": "ejemplo de express",
  "main": "index.mjs",
  "type":"module"
  "scripts": {
    "dev": "node run index"
  },
  "author": "jflores",
  "license": "ISC",
  "keywords": [],
    "dependencies": {
    "express": "^4.21.0",
  }
}

```
## Devolver datos
### Devolver texto/html/json

```js
import express from 'express';
const app = express();

app.get('/', (req, res) => {
	//en express:
	//el status 200 va x default
	//el `Content-Type` la pone express de aacuerdo al contenido enviado
    res.send('Hola mundo'); 
    //al usar `res.json()`, Express automárate establece la cabecera 
	//`Content-Type` a `application/json`.
    res.json({success:true, data:"mis datos", error:null});
    res.send('<h1>Hola Mundo</h1><p>Bienvenido a mi sitio</p>');
    
})

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Servidor corriendo el el PUERTO ${PORT}`);
})
```


### Devolver html

```js
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Mi Página</title>
            </head>
            <body>
                <h1>¡Hola desde Express!</h1>
                <p>Este HTML se envió directamente como string.</p>
            </body>
        </html>
    `;
    res.set({
       'Content-Type': 'text/html'
     }).send(html); // Envía el HTML como respuesta
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
```

### Devolver archivo html

```js
import express from 'express';
import path from 'path';

const app = express();
const raiz=process.cwd() //obtener directorio raiz del proyecto

app.get('/', (req, res) => {
    
    res.sendFile(path.join(raiz,'public', 'index.html'));
    
})

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Servidor corriendo el el PUERTO ${PORT}`);
})
```

### Servidor estático

si tiene la estructura de archivos:
```text
proyecto/
  ├── server.js
  └── public/
      ├── index.html
      ├── styles.css
      └── script.js
```

El siguiente código, sirve archivos estáticos desde el directorio public.
```js
import express from 'express'
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join('public', 'index.html'));
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
```

Ahora, los archivos en la carpeta 'public' se pueden acceder así:
http://localhost:3000/index.html -> sirve public/index.html
http://localhost:3000/styles.css -> sirve public/styles.css
http://localhost:3000/script.js -> sirve public/script.js

### Otras formas de devolver respuesta:

* con encabezado usando writehead:
```js
    res.writeHead(200, { "Content-Type": "text/plain" });
    // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World"
    res.end("Hola Mundo!\n");
    //opciones:
	res.status(200).send('Hola mundo');
	//poner encabezado
	res.status(200).set({'Content-Type': 'text/html'}).send('<p>Hola mundo</p>');
	//resonder json
    res.status(200).json({success:true, data:"mis datos", error:null});
```
Es (recomendado) el siguiente código mas intuitivo:
```js
// Equivalente en Express (recomendado)

  res.status(200)
     .set({
       'Content-Type': 'text/plain',
       'Custom-Header': 'Hello-World',
     })
     .send('¡Hola con métodos Express!');

```

* Con json() no se necesita JSON.stringify
```js
res.status(200).json({success:true, data:"mis datos", error:null});
```

## Recibir datos desde el front end

Podemos enviar datos en la ruta: `http://localhost:3000/user`, por ejemplo si deseamos indicar que queremos el usuario 4 podemos hacerlo.  
Agregando `http://localhost:3000/user/4`
### Parámetros de ruta

```js
//espera: http://localhost:3000/user/4
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ID: ${id}`);
});
```
### Parámetros json

Por ejemplo si enviamos en el body:
```text
{
  "id": 4,
  "name": "ana",
  "sexo": "f"
}
```
Lo recibimos así:
```js
app.use(express.json())
app.get('/user', (req, res) => {
    const userData = req.body;
    const { id, name } = req.body;
    console.log(`${id}, ${name}`);
    res.send(JSON.stringify(userData) );
});
```
Devuelve:
```text
{ id: 4, name: 'ana', sexo: 'f' }
```
### Parámetros desde un formulario

1. **Para `application/x-www-form-urlencoded`**: Es el tipo de contenido por defecto cuando un formulario se envía sin adjuntar archivos. Express tiene un middleware integrado para parsear estos datos.
2. **Para `multipart/form-data`**: Se utiliza cuando el formulario incluye la subida de archivos. En este caso, necesitarás un middleware adicional como `multer` para manejar los datos.

Suponga el formulario:
```html
<form action="http://localhost:3000/formulario" method="POST">
  <input type="text" name="nombre" placeholder="Nombre">
  <input type="email" name="email" placeholder="Email">
  <textarea name="mensaje" placeholder="Mensaje"></textarea>
  <button type="submit">Enviar</button>
</form>
```

```js
app.use(express.urlencoded({ extended: true }));
app.post('/formulario', (req, res) => {
  // Los datos del formulario están en req.body
  const { nombre, email, mensaje } = req.body;

  console.log('Datos del formulario:', req.body);
  console.log('Nombre:', nombre);
  console.log('Email:', email);

  res.send('Formulario recibido');
});
```

### Parámetros query

Para recibir datos: 
`:http://localhost:3000/search?id=779&nombre=alejandro flores&edad=59`
```js
//parametros query
//espera:http://localhost:3000/search?id=779&nombre=alejandro flores&edad=59
app.get('/search',(req,res)=>{
    const data=req.query
    console.log(data)
    res.send(
        `
        <h1>${data.id} bienvenido ${data.nombre} tu edad ${data.edad}</h1>
        `
    )
})
```