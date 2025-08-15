//funcion closures
function creaImpresorDeMensajes(tipo, estilos) {
    return function mensaje(texto,linea=0) {
        console.log(estilos, `${tipo}: ${texto} linea: ${linea}`.trim()); 
    };
}

const error = creaImpresorDeMensajes("Error", '\x1b[31m\x1b[40m%s\x1b[0m');
const warning = creaImpresorDeMensajes("Error", '\x1b[33m\x1b[40m%s\x1b[0m');
const success = creaImpresorDeMensajes("Error", '\x1b[32m\x1b[40m%s\x1b[0m');

error("Este es un mensaje de error con estilo personalizado",11);
warning("Este es un mensaje de advertencia con estilo personalizado");
success("Este es un mensaje de éxito con estilo personalizado");