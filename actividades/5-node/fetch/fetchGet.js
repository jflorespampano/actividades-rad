/**
 * Obtiene datos de la API
 * @param {*} url url de la API
 */
function getData(url){
    fetch(url)
    .then(function(response) {
        if(!response.ok){throw new Error("Error al recibir datos")}
        return response.json();
    })
    .then((data)=> {
        console.log('data = ', data);
        data.forEach((x)=>{
            console.log(x);
        })
    })
    .catch(function(err) {
        console.log("Error...");
        console.error(err);
    });
}

getData("https://jsonplaceholder.typicode.com/albums");