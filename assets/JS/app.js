/* ------------------------------------CLASES----------------------------------------------------------------------------------- */

/* CLASE PRODUCTOS CREADA */
class Producto {
    constructor(id,nombre, categoria, precio, stock, imagen) {
      this.id = id;
      this.nombre = nombre;
      this.categoria = categoria;
      this.precio = parseFloat(precio);
      this.stock = stock;
      this.imagen = imagen;
    }
    sumaIva() {
      this.precio = this.precio * 1.21;
    }
  }
  
  /* CREO FUNCION PARA CREAR PRODUCTOS */
  
  const crearProducto = (nombre, categoria, precio, stock, imagen) => {
    const producto = new Producto(nombre, categoria, precio, stock, imagen);
  };
  
  
  /*-------------------------------------INSTANCIAS-----------------------------------------------------------------   */
  
  /* PRODUCTO */
  
  const torta = new Producto(
    1,
    "torta",
    "dulce",
    1200,
    50,
    "https://i.ibb.co/qrDrn0H/Torta-1.jpg"
  );
  const bocados = new Producto(
    2,
    "bocados",
    "salados",
    200,
    100,
    "https://i.ibb.co/ZGSygjC/Bocados-1-1.jpg"
  );
  const tarta = new Producto(
    3,
    "tarta",
    "dulce",
    500,
    100,
    "https://i.ibb.co/LDKgysR/Tartas-1.jpg"
  );
  const shots = new Producto(
    4,
    "shots",
    "dulce",
    500,
    100,
    "https://i.ibb.co/nbkhCff/Shots-1.jpg"
  );
  
  
  
  /* CREA LISTA PRODUCTOS CON TODOS LOS PRODUCTOS DISPONIBLES */
  
  let productos = [];
  
  productos.push(torta);
  productos.push(tarta);
  productos.push(bocados);
  productos.push(shots);
  
  console.log(productos);
  
  /* GUARDAR LISTA EN ALMACENAMIENTO LOCAL, EN FUNCION "GUARDAR BASE" */
  
  const guardarBase = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  
  for (const producto of productos) {
    guardarBase("catalogo", JSON.stringify(productos));
  }
  
  /*------------------------------------------------- SIMULADOR ------------------------------------------------------------------------- */ /* -----CALCULAR EL COSTO TOTAL DE LOS PRODUCTOS SELECCIONADOS (PRECIO POR CANTIDAD DEL PRODUCTO), Y MOSTRARLO AL USUARIO--------- */
  
  /* FUNCION QUE GUARDA LOS DATOS INGRESADOS POR EL USUARIO */

  let listadoProducto = [];
  
  let nombre_producto;
  let tipo_productos;
  
  const guardarDato = () => {
    let nombre_producto = document.getElementById("nombre").value;
    console.log(nombre_producto);
  
    let tipo_productos = document.getElementById("tipo").value;
    console.log(tipo_productos);
  
  };

/* -------------------------------------------------------------------------------------------------- */

  /* EVENTO CLICK SOBRE EL BOTON, PARA QUE GUARDE EL DATO, BUSQUE LOS PRODUCTOS ELEGIDOS E IMPRIMA LOS PRODUCTOS COMO CARDS */

  const boton = document.getElementById("save");
  
  boton.addEventListener("click", (e) => {
    guardarDato()
    e.preventDefault()
    busqueda_productos();
    filtrado_productos();
  });
  
  
   /*------ SE TOMA LOS DATOS BRINDADOS POR EN EL INPUT, Y SE CREA ARRAY DE LOS PRODUCTOS FILTRADOS "LISTADO PRODUCTOS"---------- */

  
/* USUARIO FILTRA POR LOS PRODUCTOS A COMPRAR*/

  let eleccion = [];
  
  function busqueda_productos() {
  
        let nombre_producto = document.getElementById("nombre");
  
        let tipo_productos = document.getElementById("tipo");
  
    /* SE CREA UN ARRAY CON LOS PRODUCTOS FILTRADOS POR EL USUARIO */
  
        const eleccion = productos.filter((productos) => productos.nombre == nombre_producto.value && productos.categoria == tipo_productos.value
        );
  
    /*  GUARDA LOS PRODUCTOS ELEGIDOS EN ARRAY LISTADO PRODUCTOS*/
    listadoProducto = eleccion;
  }
  

  console.log(eleccion);
  console.log(listadoProducto);

  /* ---------------------------------REVISAR ESTA PARTE DE ABAJO---------------------------------------------------------------------------- */
  
  /* QUE SE IMPRIMAN EN EL MISMO INDEX. HTML LOS PRODUCTOS FILTRADOS POR EL USUARIO */
  
  let contenedorIndex = document.getElementById("productosFiltrados");


  
/* QUIERO QUE SI EL PRODUCTO BUSCADO ES DE OTRA CATEGORIA, TIRE LA ETIQUETA <P></P>  

/* ----------------------------------------REVISAR LA PARTE DE ARRIBA--------------------------------------------------------------- */

/* -------------LA FUNCION FILTRA PRODUCTOS E IMPRIME LA BUSQUEDA REALIZADA EN UNA CARD ---------------------------------*/

let listaVacia;

  function filtrado_productos() {
    let nombre_producto = document.getElementById("nombre");
    let tipo_productos = document.getElementById("tipo");
    
    if (listadoProducto === [] || listadoProducto === null || (listadoProducto.tipo_productos !== productos.categoria)){
      listaVacia = document.createElement("p");
      listaVacia.innerHTML = `<p> La busqueda no coincide con ningun producto</p>`;
      document.body.appendChild(listaVacia);
    } else {
      localStorage.setItem("busqueda", JSON.stringify(listadoProducto));
    }
  
    listadoProducto.forEach((listadoProducto) => {
      contenedorIndex.innerHTML += `
                  <div class="col-12">
                    <div class="card containerflex--estilocaja">
                      <h2>Producto Seleccionado</h2>
                      <img src="${listadoProducto.imagen}" alt="" width="300px" height="300px">
                      <div class="card-body">
                        <h5 class="card-title">"Nombre: "${listadoProducto.nombre}</h5>
                        <p>"Precio: " ${listadoProducto.precio}</p>
                        <p class="card-text">Armamos todo tipo de productos personalizados</p>
                        <button href="#" class="btn btn-primary btnCards" onclick ="agregarCarrito" > AGREGAR AL CARRITO </button>
                      </div>
                    </div>
                  </div>`;
    });
    filtrado = contenedorIndex.innerHTML;
  }


/* -----------------------------------------SECCION PARA EL CARRITO DE COMPRA. DESARROLLO DEL CARRITO------------------------------------------------- */

/* LISTADO PRODUCTO ES LA VARIABLE QUE CONTIENE LA ELECCION DEL USUARIO */


/* CARRITO DE COMPRA */

let carritoDeCompra = [];

/* TRAE EL ARRAY DE LISTADO PRODUCTO, CON LA SELECCION DEL USUARIO */

seleccionUsuario = JSON.parse(localStorage.getItem("busqueda"))

const agregarCarrito = () =>{

let contenedorCarrito = document.getElementById("claveCarrito")

carritoDeCompra.push(seleccionUsuario)

carritoDeCompra.innerHTML +=

          `<div class="col-12">
            <div class="card containerflex--estilocaja">
            <h2>Producto Seleccionado</h2>
            <img src="${seleccionUsuario.imagen}" alt="" width="px" height="px">
             <div class="card-body">
                <h5 class="card-title">"Nombre: "${seleccionUsuario.nombre}</h5>
                <p>"Precio: " ${seleccionUsuario.precio}</p>
                <p class="card-text">Armamos todo tipo de productos personalizados</p>
                <button href="#" class="btn btn-primary btnCards" onclick ="agregarCarrito" > AGREGAR AL CARRITO </button>
             </div>
           </div>
          </div>`

};
console.log(seleccionUsuario)


/* FUNCION PARA CALCULAR EL COSTO TOTAL DE LA COMPRA */

const compraFinal = () => {

  let monto = 0

  seleccionUsuario.forEach(e => {
      monto += e.precio
  })

  console.log(monto);
  localStorage.removeItem("carrito")
}

  console.log(seleccionUsuario)

  /* --------------------------BORRAR LA BUSQUEDA REALIZADA POR EL USUARIO--------------------------------------- */
  

const borrado = document.getElementById("borrarBusqueda")

const borrar = () => {

/* FALTA ARMAR LA LOGICA CODIGO */
}

borrado.addEventListener("click", (e) => {
  borrar()
  e.preventDefault()
});

  /* ---------------------------------------------JQUERY------------------------------------------------------ */

  /* HAY QUE REVISARLO!!!!!!!!!! */

  /* EVENTO APLICANDO JQUERY PARA QUE HAGA SLIDETOGGLE SOBRE EL BOTON "COMPRAR" DE LAS CARDS */

   
  mostrarMensaje = () =>{

    $("mensaje").append(`<div>
                                 <h5>El producto fue agregado al carrito</h5>
                                 <button id = "boton"></button>
                                 </div>`);
  }
   
  $("boton").on("click",() =>{
     $("mensaje").slideToogle("fast"),mostrarMensaje()
   })

   console.log(mostrarMensaje())



   /* --------------------------  /* IMPRIME TODOS LO PRODUCTOS DISPONIBLES EN EL INDEX ---------------------------------------------------------- */

     
  let productosIndex = document.getElementById("totalProductos");


  let productosDisponibles = JSON.parse(localStorage.getItem("catalogo"))

  console.log(productosDisponibles)
  
  let result;

const mostrarProductos = (productosIndex) => {
  
    let resultado = "";
    
    productosDisponibles.forEach(productosDisponibles => {
    productosIndex.innerHTML += 
        `<div class="col-sm-4 my-3">
              <div class="card containerflex--estilocaja">
                <img src=${productosDisponibles.imagen} alt="" width="px" height="px">
                <div class="card-body">
                  <h5 class="card-title">"Nombre: "${productosDisponibles.nombre}</h5>
                  <p>"Precio: " ${productosDisponibles.precio}</p>
                  <p class="card-text">Armamos todo tipo de productos personalizados</p>
                  <button href="#" class="btn btn-primary btnCards" onclick= mostrarMensaje()> COMPRAR</button>
                </div>
              </div>
            </div>`  
          
    })
  
    resultado = productosIndex.innerHTML
  }

  mostrarProductos(productosIndex);