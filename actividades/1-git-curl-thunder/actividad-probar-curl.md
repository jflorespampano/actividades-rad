# curl

Formato general:
```sh
curl -X POST/GET/PATCH/DELETE [url]
-H "Content-Type: [content  type]"
-d '[request data]'
-v/-i
```
La opcion -H indica el tipo de codificación de datos. 
Codificaciones en http
```sh
Content-Type: application/json
Content-Type: application/x-www-form-urlencoded
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## consultas

Prueba la siguientes sentencia en la consola bash de git

## Actividad: usando Get

En una ventana bash pruebe las sentencias:
```sh
curl -X GET https://jsonplaceholder.typicode.com/posts
#por default si no se pone -X GET se asume que es un get por tato lo anterio es igual que:
curl https://jsonplaceholder.typicode.com/posts
```

## Post enviando codificación en urlencoded

Cuando pasa parametros en curl con -d x deafult se usa la codificación: 
'Content-Type: application/x-www-form-urlencoded' 
de no usar esa se debe especificar otra con -H

```sh
curl --request POST https://jsonplaceholder.typicode.com/posts -d 'title=23&body=cuerpo del body&userId=32'

curl -X POST https://jsonplaceholder.typicode.com/posts -H "Content-Type: Application/json" -d '{"title":"23","body":"cuerop de...","userId":32}'
```

## nota linux

En linux puedo enviar la sentencia en varias lineas dividiendo con \
```sh
curl --request POST https://jsonplaceholder.typicode.com/posts \
-H "Content-Type: Application/json" \
-d '{"title":"23","body":"cuerop de...","userId":32}'
```

En windows usando cmd las lineas se dividen usondo ^, y escapar comillas
```sh
curl --request POST https://jsonplaceholder.typicode.com/posts ^
-H "Content-Type: Application/json" ^
-d "{\"title\":\"23\",\"body\":\"cuerpo de...\",\"userId\":32}"
```
En windows usando power shell no se recomienda por que usa su propio curl (invoke-restmethod)

## post con datos en un archivo

Archivo data.json
```json
{"title":"hola mundo","body":"mi primer post"}
```
Ejemplos:
```sh
curl -X POST -H "Content-Type: Application/json"  -d "@data.json"  https://jsonplaceholder.typicode.com/posts
```
