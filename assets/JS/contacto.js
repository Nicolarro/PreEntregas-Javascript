
/* FUNCION QUE TOME LOS DATOS DE CONTACTO DEL USUARIO  Y LOS GUARDA EN BASE DE DATOS*/


const agregarCliente =  () =>{

    const cliente  = new Cliente ({

    nombre : document.getElementById("nombre").value,
    apellido : document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    tipoEvento : document.getElementById("tipoEvento").value,
    comentarios : document.getElementById("comentarios").value,

})
    let baseCliente = localStorage.setItem("cliente",agregarCliente())
}
    



console.log(agregarCliente());
