
/* CLASES */

class Cliente{
    constructor(nombre,apellido,email,tipoEvento,comentarios){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tipoEvento = tipoEvento;
        this.comentarios = comentarios;
    }
}

const cliente = new Cliente({

    nombre : document.getElementById("nombre").value,
    apellido : document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    tipoEvento : document.getElementById("tipoEvento").value,
    comentarios : document.getElementById("comentarios").value,
})

console.log(cliente)

let listaCliente;

 listaCliente= listaCliente.push(cliente)


localStorage.setItem("clientes",JSON.stringify(listaCliente))

/* -------------------------------------------USO DE AJAX------------------------------------------- */
/* AJAX SOBRE FORMULARIO DE CONTACTO, PARA QUE TOME EL IMPUT Y LE AVISO EN MENSAJE QUE SE RECIBIO LA CONSULTA */


/* FUNCION QUE TOME LOS DATOS DE CONTACTO DEL USUARIO  Y LOS GUARDA EN BASE DE DATOS*/

 const agregarCliente =  () =>{

    if (localStorage.getItem("clientes") != null) {
       let lista = JSON.parse(localStorage.getItem("clientes"))
        listaNueva.push(lista)
        localStorage.setItem("listaCliente", JSON.stringify(listaCliente))
        } 

    listaCliente.push(cliente)

return listaCliente//traer cliente o traer lista?
}  
console.log(listaCliente)
console.log(cliente)

/* let boton = document.getElementById("clientes") */

/*     boton.addEventListener("click", (e) => {
        e.preventDefault(),agregarCliente() }) */


    /* -------------------------------------------------------------- */

    /* 1-NO ME ESTA MOSTRANDO LA INFORMACOIN CORRECTA, ME MUESTRA DATOS FAKE
     2- LUEGO SE PUEDE HACER QUE LA API DEVUELVA SOLO LA ULTIMA DATA SUBIDA? PARA EL MENSAJE DE ALERTA*/

$(document).ready(function() {

     const apiURL = "https://6185b88b23a2fe0017fff6e7.mockapi.io/usuarios"

   let  mostrar = $("body").append('<button id="clientes">MOSTRAR CLIENTES</button>');

   
   console.log(listaCliente)

    $("#guardar").submit((e) => { 
        e.preventDefault(),agregarCliente(),$.ajax({
            method: "POST",
            url:apiURL,
            data:cliente, //esta bien que sea el objeto?
            success: function (respuesta) {
                $("body").append(`<div>
                                        <h3>${listaCliente.nombre}</h3>
                                        <p> "Su respuesta ha sido registrada"</p>
                                    </div>`);
              }  
            });
        });
    })

/* ELEMENTO DE BOOTSTRAP PARA ALERTA DE RESPUESTA */

 /* TOAST DE BOOTSTRAP */

/* let toastTrigger = document.getElementById('liveToastBtn')
let  toastLiveExample = document.getElementById('liveToast')
        if (toastTrigger) {
            toastTrigger.addEventListener('click', function () {
            let toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
  })
}
 */




