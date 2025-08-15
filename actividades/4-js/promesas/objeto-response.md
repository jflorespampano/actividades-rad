El objeto Response contiene:

* status: Código de estado HTTP (ej: 200, 404, 500).
* statusText: Mensaje del estado (ej: "OK", "Not Found").
* ok: Booleano (true si el estado es 200-299).
* headers: Objeto con las cabeceras HTTP.
* url: URL de la solicitud (útil si hay redirecciones).
* Métodos para leer el cuerpo:
    * .json() → Convierte el cuerpo a un objeto JavaScript (Promesa).
    * .text() → Lee el cuerpo como texto plano.
    * .blob() → Para datos binarios (imágenes, PDFs).