function getDatos(url){
    fetch(url)
    .then(resp=>{
        return resp.json()
    })
    .then(data=>{
        console.log(data)
        const tabla=document.getElementById('dataTable');
        let s='';
        data.forEach(item=>{
            s+=`<tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.username}</td>
                </tr>
            `
        })
        tabla.innerHTML=s;
    })
}
window.onload=function(){
    getDatos('https://jsonplaceholder.typicode.com/users')
}