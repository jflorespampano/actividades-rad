// Función que simula obtener datos de un usuario (operación asíncrona)
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    console.log(`Buscando usuario con ID: ${id}...`);
    
    // Simulamos delay de red con setTimeout
    setTimeout(() => {
      const usuarios = {
        1: { id: 1, nombre: "Ana García", email: "ana@ejemplo.com" },
        2: { id: 2, nombre: "Carlos López", email: "carlos@ejemplo.com" }
      };
      
      const usuario = usuarios[id];
      
      if (usuario) {
        resolve(usuario); // Promesa resuelta
      } else {
        reject(`Usuario con ID ${id} no encontrado`); // Promesa rechazada
      }
    }, 2000); // Simula 2 segundos de delay
  });
}

// Uso básico de la promesa
obtenerUsuario(10)
  .then(usuario => {
    console.log("Usuario encontrado:", JSON.stringify(usuario));
    return usuario.nombre; // Podemos encadenar más operaciones
  })
  .then(nombre => {
    console.log(`Bienvenido, ${nombre}!`);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Búsqueda de usuario finalizada");
  });

