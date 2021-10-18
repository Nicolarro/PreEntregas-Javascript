
/* FUNCION QUE TOME LOS DATOS DE CONTACTO DEL USUARIO */

const agregarCliente =  () =>{

    const cliente
    let nombreUsuario = document.getElementById("nombre").value;
    let apellidoUsuario = document.getElementById("apellido").value;
    let emailUsuario = document.getElementById("email").value;
    let tipoEvento = document.getElementById("tipoEvento").value;
    let comentarios = document.getElementById("comentarios").value;

    localStorage.setItem("cliente",agregarCliente())
}
    
console.log(agregarCliente());
