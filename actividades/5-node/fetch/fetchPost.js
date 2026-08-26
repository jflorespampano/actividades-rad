/**
 * Da de alta un album en la API de jsonplaceholder
 * @param {*} url url de la API
 * @param {*} data datos del album a dar de alta
 * @returns 
 */
function postData(url = "", data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(respuesta=>{
        if(respuesta.ok){
            return respuesta.json()
        }else{
            throw new Error("Error al cargar")
        }
    })
}
const album={
    "userId": 1,
    "title": "quidem molestiae enim"
}
postData("https://jsonplaceholder.typicode.com/albums", album)
.then((data) => {
  console.log(data); 
});