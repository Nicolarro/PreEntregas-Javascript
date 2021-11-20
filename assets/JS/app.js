/* ------------------------------------CLASES----------------------------------------------------------------------------------- */

/* CLASE PRODUCTOS CREADA */
class Producto {
  constructor(id, nombre, categoria, precio, stock, imagen) {
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
  "salados",
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

/* -------------------------- IMPRIME TODOS LO PRODUCTOS DISPONIBLES EN EL INDEX ---------------------------------------------------------- */

let productosIndex = document.getElementById("totalProductos");

let productosDisponibles = JSON.parse(localStorage.getItem("catalogo"));

console.log(productosDisponibles);

let result;

const mostrarProductos = (productosIndex) => {
  let resultado = "";

  productosDisponibles.forEach((productosDisponibles) => {
    productosIndex.innerHTML += `<div class="col-sm-4 my-3">
               <div class="card containerflex--estilocaja">
                 <img src=${productosDisponibles.imagen} alt="" width="px" height="px">
                 <div class="card-body">
                   <h5 class="card-title">"Nombre: "${productosDisponibles.nombre}</h5>
                   <p>"Precio: " ${productosDisponibles.precio}</p>
                   <p class="card-text">Armamos todo tipo de productos personalizados</p>
                   <button href="#" class="btn btn-primary btnCards" onclick= mostrarMensaje()> AGREGAR </button>
                 </div>
               </div>
             </div>`;
  });

  resultado = productosIndex.innerHTML;
};

mostrarProductos(productosIndex);

/*------ SE TOMA LOS DATOS BRINDADOS POR EN EL INPUT, Y SE CREA ARRAY DE LOS PRODUCTOS FILTRADOS "LISTADO PRODUCTOS"---------- */

/* USUARIO FILTRA POR LOS PRODUCTOS A COMPRAR*/

let eleccion = [];

function busqueda_productos() {
  let nombre_producto = document.getElementById("nombre");

  let tipo_productos = document.getElementById("tipo");

  /* SE CREA UN ARRAY "ELECCION" CON LOS PRODUCTOS FILTRADOS POR EL USUARIO */

  const eleccion = productos.filter(
    (productos) =>
      productos.nombre == nombre_producto.value &&
      productos.categoria == tipo_productos.value
  );

  /*  GUARDA LOS PRODUCTOS ELEGIDOS EN ARRAY "LISTADO PRODUCTO"*/
  listadoProducto = eleccion;
}

console.log(eleccion);
console.log(listadoProducto);

/* -------------LA FUNCION "FILTRADO PRODUCTOS" FILTRA PRODUCTOS E IMPRIME LA BUSQUEDA REALIZADA EN UNA CARD ---------------------------------*/

let listaVacia;

let contenedorIndex = document.getElementById("productosFiltrados");

console.log(listadoProducto);

const productoAgregado = productos.nombre;

function filtrado_productos() {
  let nombre_producto = document.getElementById("nombre");
  let tipo_productos = document.getElementById("tipo");

  if (
    listadoProducto === [] ||
    listadoProducto === null ||
    tipo_productos.value !== productos.categoria
  )
   {
    /*  EL PRODUCTO BUSCADO ES DE OTRA CATEGORIA, INDICA QUE EL PRODUCTO NO EXITE PARA ESA CATEGORIA/-*/

    listaVacia = document.createElement("p");

    listaVacia.innerHTML = `<p> La busqueda no coincide con ningun producto</p>`;
    document.body.appendChild(listaVacia);
  } else {
    localStorage.setItem("busqueda", JSON.stringify(listadoProducto)),
    listaVacia.innerHTML = ""
  }

  console.log(listaVacia);

  contenedorIndex.innerHTML = "";

  listadoProducto.forEach((listadoProducto) => {
    contenedorIndex.innerHTML = ` 
                  <div class="col-12">
                    <div class="card containerflex--estilocaja">
                      <h2>Producto Seleccionado</h2>
                      <img src="${listadoProducto.imagen}" alt="" width="300px" height="300px">
                      <div class="card-body">
                        <h5 class="card-title">"Nombre: "${listadoProducto.nombre}</h5>
                        <p>"Precio: " ${listadoProducto.precio}</p>
                        <p class="card-text">Armamos todo tipo de productos personalizados</p>
                        <button href="#" class="btn btn-primary btnCards" id="botonComprar" onclick ="agregarCarrito" > AGREGAR AL CARRITO </button>
                      </div>
                    </div>
                  </div>`;
  });
  filtrado = contenedorIndex.innerHTML;

  /* PARA QUE SOLO ME MUESTRE EL PRODUCTO FILTRADO, Y NO EL CATALOGO COMPLETO DE PRODUCTOS */
  productosIndex.innerHTML = "";
}

/* -------------------------------------EVENTOS------------------------------------------------------------- */

/* EVENTO CLICK SOBRE EL BOTON, PARA QUE GUARDE EL DATO, BUSQUE LOS PRODUCTOS ELEGIDOS E IMPRIMA LOS PRODUCTOS COMO CARDS */

const boton = document.getElementById("save");

boton.addEventListener("click", (e) => {
  guardarDato();
  e.preventDefault();
  busqueda_productos();
  filtrado_productos();
});

/* -----------------------------------------SECCION PARA EL CARRITO DE COMPRA. DESARROLLO DEL CARRITO------------------------------------------------- */

/* LISTADO PRODUCTO ES LA VARIABLE QUE CONTIENE LA ELECCION DEL USUARIO */

/* CARRITO DE COMPRA */

let carritoDeCompra = [];

seleccionUsuario = JSON.parse(localStorage.getItem("busqueda"));

console.log(seleccionUsuario);

const botonSeleccion = document.getElementById("#mensaje"); //VIENE DEL PRINT DE LISTADO PRODUCTOS

/* EN 
AGREGAR AL LOCAL STORAGE CONSERVANDO LO QUE SE TENIA ANTES, Y FORMA PARA CONTAR LOS ITEMS REPETIDOS EN EL ARRAY
OPCION 2) HACER UN FIND AL CARRITO SOBRE LO QUE SE TIENE EN EL CARRITO, PARA HACER CANTIDAD =+ 1*/

const agregarCarrito = () => {
  /* ACA NO VA CARRITO DE COMPRA, VA UN UN DIV DEL HTML */
  seleccionUsuario.foreach((element) => {
    botonSeleccion.innerHTML += `
  <div class="col-12">
  <div class="card containerflex--estilocaja">
    <h2>Producto Seleccionado</h2>
    <img src="${seleccionUsuario.imagen}" alt="" width="300px" height="300px">
    <div class="card-body">
      <h5 class="card-title">"Nombre: "${seleccionUsuario.nombre}</h5>
      <p>"Precio: " ${seleccionUsuario.precio}</p>
      <p class="card-text">Armamos todo tipo de productos personalizados</p>
    </div>
  </div>
</div>`;
  });

  compra = carritoDeCompra.push(seleccionUsuario);
};

/* ---------------------------------------------JQUERY------------------------------------------------------ */

/* HAY QUE REVISARLO!!!!!!!!!! */

/* EVENTO APLICANDO JQUERY PARA QUE HAGA SLIDETOGGLE SOBRE EL BOTON "COMPRAR" FILTRADO DE LAS CARDS */

mostrarMensaje = () => {
  $("#mensaje").append(`<div>
                               <h5>El producto fue agregado al carrito</h5>
                              </div>`);
};

/* "BOTON COMPRAR" VIENE DEL DIV QUE SE IMPRIME EN LISTADO PRODUCTOS */
$("#botonComprar").click(() => {
  $("#mensaje").slideToogle("fast"), mostrarMensaje();
});

console.log(mostrarMensaje());

/*  ------------------------------------------------------------------------------------ */
/* PARA CARRITO DE COMPRAS */

/* HACER METODO SPLICE PARA DEVOLVER UN ARRAY NUEVO, ELIMINAR OBJETOS DE ARRAY,  */

for (let i = 0; i < seleccionUsuario.indexOf(); i++) {
  botonSeleccion[i].addEventListener("click", agregarCarrito());
}

/* TRAE EL ARRAY DE LISTADO PRODUCTO, CON LA SELECCION DEL USUARIO */

/* FUNCION PARA CALCULAR EL COSTO TOTAL DE LA COMPRA */

const compraFinal = () => {
  let monto = 0;

  seleccionUsuario.forEach((e) => {
    monto += e.precio;
  });

  console.log(monto);
  localStorage.removeItem("carrito");
};

console.log(seleccionUsuario);

/* --------------------------BORRAR LA BUSQUEDA REALIZADA POR EL USUARIO------------------------------------ */


/* FALTA VER QUE NO REPITA LOS PRODUCTOS */

const borrado = document.getElementById("borrarBusqueda");

const borrarBusqueda = () => {
  if (borrado.checked) {
    mostrarProductos(productosIndex),contenedorIndex.innerHTML="",listaVacia.innerHTML=""
  }
};

listadoProducto = [];

/*  HAY QUE HACERLE UN VACIO AL ELEMENTO DEL HTML -->YA HECHO EN FORMULAS, POR QUE NO ME DA? */

borrado.addEventListener("click", (e) => {
  borrarBusqueda();
  e.preventDefault();
});
