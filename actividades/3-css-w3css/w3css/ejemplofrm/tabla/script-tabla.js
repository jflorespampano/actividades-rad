function getDatos(url){
    fetch(url)
    .then(resp=>{
        return resp.json()
    })
    .then(data=>{
        console.log(data)
        const tabla=document.getElementById('dataTable');
        data.forEach(item=>{
            const tr=document.createElement('tr');
            tr.innerHTML=`
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.username}</td>

            `;
            tabla.appendChild(tr);
        })
    })
}
window.onload=function(){
    getDatos('https://jsonplaceholder.typicode.com/users')
}