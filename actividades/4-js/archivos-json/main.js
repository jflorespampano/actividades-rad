// console.log(data);
const datos2=data.map(({first_name, last_name, edad})=>(
    {nombre:first_name,apellido:last_name,edad})
)
const datos=data.map(({first_name:nombre, last_name:apellido, edad})=>(
    {nombre,apellido,edad})
)

const strDatos=datos.map((item)=>
    `<tr>
        <td>${item.nombre}</td> 
        <td>${item.apellido}</td>
        <td>${item.edad}</td>
    </tr>`
).join('\n')

document.getElementById('tabla-body').innerHTML=strDatos

// console.log(strDatos)