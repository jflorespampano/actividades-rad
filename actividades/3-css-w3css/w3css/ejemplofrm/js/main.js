window.onload=function(){

    function traeFuncion(){
        return function(){
            const sexo=document.forms.frm_alta.elements.sexo.value;
            const estado=document.forms["frm_alta"].elements.cmb_estado.value;
            const nombre=document.forms["frm_alta"].elements.nombre.value;

            // const fecha=document.forms["frm_alta"].elements.fecha.value;
            const fecha = document.querySelector('#fecha').value;
            // const fecha = document.getElementById('fecha').value;
            alert(`nombre:${nombre} sexo:${sexo}+ estado: ${estado} fecha:${fecha}`);
        };
    }

    document.querySelector("#btn_aceptar").addEventListener('click',traeFuncion());
    
    document.querySelector("#btn_cancelar").addEventListener('click',()=>{
        const form = document.getElementById('frm_alta');
        const formData = new FormData(form);
        // const jsonData = Object.fromEntries(formData.entries());
        const jsonData = Object.fromEntries(formData);
        console.log(jsonData);
        alert(JSON.stringify(jsonData))
    });
}