
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


/* FUNCION QUE TOME LOS DATOS DE CONTACTO DEL USUARIO  Y LOS GUARDA EN BASE DE DATOS*/

let listaCliente;

 const agregarCliente =  () =>{

    if (localStorage.getItem("listaCliente") != null) {
        lista = JSON.parse(localStorage.getItem("listaCliente"))
        listaCliente.push(cliente)
        localStorage.setItem("listaCliente", JSON.stringify(listaCliente))
} 

return cliente
}  
console.log(listaCliente)

let boton = document.getElementById("clientes")

    boton.addEventListener("click", (e) => {
        e.preventDefault(),agregarCliente() })


    /* -------------------------------------------------------------- */

    const url = "https://6185b88b23a2fe0017fff6e7.mockapi.io/usuarios"

   let  mostrar = $("body").append('<button id="clientes">MOSTRAR CLIENTES</button>');

    console.log (mostrar)

    $("#clientes").click((e) => { 
        e.preventDefault(),$.post(url, cliente, function (respuesta, estado) {
            if(estado === "success"){
                console.log(respuesta)
              let listaCliente = respuesta;
              for (cliente of listaCliente) {
                $("body").prepend(`<div>
                                        <h3>${cliente.nombre}</h3>
                                        <p> "Su respuesta ha sido registrada"</p>
                                    </div>`)
              }  
            }
            });
        });


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




