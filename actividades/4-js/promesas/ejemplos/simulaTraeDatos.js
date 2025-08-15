const resp={
    "status": "success",
    "ok": true,
    "code": 200,
    "error": null,
    "message": "Datos recuperados satisfactoriamente",
    "data": {
        "id": 1,
        "name": "John Doe",
        "email": "john@mail.com"
    }
}

function buscarDatos() {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            if (resp.ok) {
                resolve(resp);
            } else {
                reject(new Error("Error al recuperar los datos"));
            }
        }, 2000);
    });
}

buscarDatos()
.then((datos) => {
    console.log("Datos recibidos:", datos);
})
.catch((error) => {
    console.error("Error:", error);
})
.finally(() => {
    console.log("Operación de búsqueda finalizada");
})