
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

/* AJAX SOBRE FORMULARIO DE CONTACTO, PARA QUE TOME EL IMPUT Y LE AVISO EN MENSAJE QUE SE RECIBIO LA CONSULTA */

let listaCliente;

/* FUNCION QUE TOME LOS DATOS DE CONTACTO DEL USUARIO  Y LOS GUARDA EN BASE DE DATOS*/


const agregarCliente =  () =>{

    let nombreCliente = cliente.nombre
    let apellidoCliente = cliente.apellido
    let emailCliente = cliente.email
    let tipoEventoCliente = cliente.tipoEvento
    let comentariosCliente = cliente.comentarios
    let boton = document.getElementById("ToastBtn")  
    
    listaCliente = listaCliente.push(listaCliente)
}

    boton.addEventListener("click", (e) => {
        e.preventDefault(),agregarCliente() })

 baseCliente = localStorage.setItem("cliente",agregarCliente())

 /* TOAST DE BOOTSTRAP */

let toastTrigger = document.getElementById('liveToastBtn')
let  toastLiveExample = document.getElementById('liveToast')
        if (toastTrigger) {
            toastTrigger.addEventListener('click', function () {
            let toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
  })
}


infoUsuarios = JSON.stringify(baseCliente)

console.log(infoUsuarios)

/*const URLJSON = "data/datos.json"

$("body").prepend('<button id="clientes">MOSTRAR CLIENTES</button>');

$("#clientes").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.name}</h3>
                                <p> ${dato.email}</p>
                            </div>`)
      }  
    }
    });
}); */


    