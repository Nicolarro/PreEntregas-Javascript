

/* TRAIGA (DE APP.JS) EL ARRAY DE LOS PRODUCTOS GUARDADOS EN LOCAL STORAGE */

let productosDisponibles = JSON.parse(localStorage.getItem("catalogo"))


let contenedorProductos = document.getElementById("productos");



/* FUNCION QUE MUESTRE E IMPRIMA EN EL HTML TODOS LOS PRODUCTOS DISPONIBLES */

let result;
const mostrarProductos = (productosDisponibles) => {

  let resultado = "";
  
  productosDisponibles.forEach(productosDisponibles => {
  contenedorProductos.innerHTML += 
          `<div class="col-sm-4 my-3">
          <div class="row containerFlex">
            <div class="card containerflex--estilocaja">
              <img src="${productosDisponibles.imagen}" alt="" width="px" height="px">
              <div class="card-body">
                <h5 class="card-title">"Nombre: "${productosDisponibles.nombre}</h5>
                <p>"Precio: " ${productosDisponibles.precio}</p>
                <p class="card-text">Armamos todo tipo de productos personalizados con los mejores ingredientes</p>
                <button href="#" class="btn btn-primary btnCards" onclick= comprarProducto()> COMPRAR</button>
              </div>
            </div>
          </div>
        </div>`  
        
  })
  

  resultado = contenedorProductos.innerHTML
}

mostrarProductos(productosDisponibles);


/* -----------------------------AJAX--------------------------------------- */
/* TRAER LA COTIZACION DEL DOLAR PARA CONOCIMIENTO DEL USUARIO */

const apiDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
cajaDolar = document.getElementById("caja")

setInterval(() =>{
$.get(apiDolar, (dato, estado) => {

   cajaDolar.innerHTML =""

if(estado =="success"){

    dato.forEach(element => {

      cajaDolar.innerHTML +=
      `
        <div>
            <div class="container-fluid">
            <p> "Tipo de Camio " ${element.casa.nombre}</p>   
              <p> "La cotizacion del dolar al dia de hoy es: " ${element.casa.compra}</p>
            </div>
            </div>`
        
    });
}
})
},3000)
