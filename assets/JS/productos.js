

/* TRAIGA (DE APP.JS) EL ARRAY DE LOS PRODUCTOS GUARDADOS EN LOCAL STORAGE */

let productosDisponibles = JSON.parse(localStorage.getItem("catalogo"))



let contenedorProductos = document.getElementById("productos");



/* FUNCION QUE MUESTRE E IMPRIMA EN EL HTML TODOS LOS PRODUCTOS DISPONIBLES */

let result;
const mostrarProductos = (productosDisponibles) => {

  let resultado = "";
  
  productosDisponibles.forEach(productosDisponibles => {
  contenedorProductos.innerHTML += 
      `<div class="container-fluid">
        <div class="row containerFlex">
          <div class="col-sm-4">
            <div class="card containerflex--estilocaja">
              <img src="${productosDisponibles.image}" alt="" width="px" height="px">
              <div class="card-body">
                <h5 class="card-title">"Nombre: "${productosDisponibles.nombre}</h5>
                <p>"Precio: " ${productosDisponibles.precio}</p>
                <p class="card-text">Armamos todo tipo de bocados para las mejores entradas</p>
                <a href="#" class="btn btn-primary btnCards" onclick= comprarProducto()> COMPRAR</a>
              </div>
            </div>
          </div>
        </div>
        </div>`  
        
  })


  resultado = contenedorProductos.innerHTML
  console.log(resultado)
  document.body.appendChild(contenedorProductos);
}

mostrarProductos(productosDisponibles);



