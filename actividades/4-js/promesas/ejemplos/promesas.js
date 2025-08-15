
function ejecutarRetardo(nombre="sin nombre") {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve(`Hola ${nombre}, la promesa se ha resuelto correctamente.`);
        }, 2000);
    })
}


ejecutarRetardo("juan perez")    
.then((mensaje) => {
    console.log(mensaje)
})
.catch((error) => {
    console.error("Error:", error);
})
.finally(() => {
    console.log("Operación finalizada");
});