# proyectos interfaz

## para la [liga](https://jsonplaceholder.typicode.com/posts)

Proyectos:
 1. Interfaz minimalista:
    * Lista de posts en cards (título + preview del body).
    * Modal al hacer clic para ver el post completo + comentarios (usando /posts/:id/comments).
2. Interfaz como twitter
    * Cada post es un "tweet" (con nombre de usuario tomado de /users).
    * Búsqueda por título (filter en el array de posts).
3. tabla con paginación
    * Tabla con paginación (10 posts por página).
    * Filtros por userId y búsqueda en tiempo real.
    * Botón para eliminar posts (simulado).

## de la [liga](https://jsonplaceholder.typicode.com/users)

4. Cards para usuarios
    * Cards con foto de perfil generada aleatoriamente (ej: DiceBear ver ejeplo).
    * Búsqueda por nombre, empresa (company.name), o teléfono.
    * Botón "Ver detalles" para mostrar toda la info (webs, dirección, etc.).
5. Gráficos (Chart.js ver ejemplo) con datos como:
    * Usuarios por ciudad (address.city).
    * Dominios de email más comunes (ej: gmail.com, yahoo.com).
    * Palabras clave en company.bs (ej: "harness", "e-commerce").
6. Perfil de usuario con:
    * Info básica + "skills(habilidades)" (simuladas usando company.bs).
    * Posts relacionados (consumiendo /posts?userId=1).

