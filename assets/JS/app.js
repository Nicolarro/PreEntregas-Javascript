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

const crearProducto = (id,nombre, categoria, precio, stock, imagen) => {
  const producto = new Producto(id,nombre, categoria, precio, stock, imagen);
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

  productosDisponibles.forEach((element) => {
    let index = productosDisponibles.indexOf(element);

    productosIndex.innerHTML += `<div class="col-sm-4 my-3">
               <div class="card containerflex--estilocaja">
                 <img src=${element.imagen} alt="" width="px" height="px">
                 <div class="card-body">
                   <h5 class="card-title">"Nombre: "${element.nombre}</h5>
                   <p>"Precio: " ${element.precio}</p>
                   <p class="card-text">Armamos todo tipo de productos personalizados</p>
                   <button href="#" class="btn btn-primary btnCards botonComprar" onclick =comprar(${index})> AGREGAR AL CARRITO </button>
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

/* -------------LA FUNCION "FILTRADO PRODUCTOS" FILTRA PRODUCTOS E IMPRIME LA BUSQUEDA REALIZADA EN UNA CARD ---------------------------------*/

let listaVacia;

let contenedorIndex = document.getElementById("productosFiltrados");

console.log(listadoProducto);

const productoAgregado = productos.nombre;

function filtrado_productos() {
  let nombre_producto = document.getElementById("nombre");
  let tipo_productos = document.getElementById("tipo");

  /*  SI LA CATEGORIA DEL PRODUCTO BUSCADO NO COINCIDE, INDICA QUE LA BUSQUEDA NO COINCIDE CON NINGUN PRODUCTO/-*/

  if (
    listadoProducto.length == 0 ||
    tipo_productos.value !== productos.categoria
  ) {
    listaVacia = document.createElement("p");

    listaVacia.innerHTML = `<p> La busqueda no coincide con ningun producto</p>`;
    document.body.appendChild(listaVacia);
  } else {
    localStorage.setItem("busqueda", JSON.stringify(listadoProducto)),
      (listaVacia.innerHTML = "");
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
                        <button href="#" class="btn btn-primary btnCards botonComprar"> DETALLE DEL PRODUCTO </button>
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

function agregarCarrito(evento) {
  const botonComprar = document.querySelectorAll(".botonComprar"); //VIENE DEL PRINT DE LISTADO PRODUCTOS

  botonComprar.forEach((elemento) => {
    elemento.addEventListener("click", comprar(index));
  });
}

let carritoDeCompra = [];

let carrito = document.getElementById("carrito");


const comprar = (index) => {
  let carritoDeCompra;
  if (localStorage.getItem("carrito") == null) {
    carritoDeCompra = [];
  } 
  else 
  {
    carritoDeCompra = JSON.parse(localStorage.getItem("carrito"));
  }
  carritoDeCompra.push(productosDisponibles[index]);
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompra));
  console.log(carritoDeCompra);

  carritoDeCompra.forEach((element) => {
    carrito.innerHTML += `
    <div class="col-12">
    <div class="card containerflex--estilocaja">
      <h2>Carrito de Compras</h2>
      <img src="${element.imagen}" alt="" width="300px" height="300px">
      <div class="card-body">
        <h5 class="card-title">"Nombre: "${element.nombre}</h5>
        <p>"Precio: " ${element.precio}</p>
      </div>
    </div>
  </div>`;
  });
};

/* FUNCION PARA CALCULAR EL COSTO TOTAL DE LA COMPRA */

let montoFinal = document.getElementById("montoFinal");

const compraFinal = () => {

  let productosCompra = JSON.parse(localStorage.getItem("carrito"));
  console.log(productosCompra)
  let monto = 0;

  console.log(productosCompra)

  productosCompra.forEach((element) => {
    monto += element.precio;
 
  console.log(monto)
})

  montoFinal.innerHTML += `
  <br>
  <p>"Monto Total: Tu monto de compra es " ${monto} </p>`;

  console.log(monto);
  
  localStorage.removeItem("carrito");
};

let botonFinalizarCompra = document.getElementById("compraCarrito");

botonFinalizarCompra.addEventListener("click", (e) =>{
compraFinal()
});

console.log(carritoDeCompra);



/* --------------------------BORRAR LA BUSQUEDA REALIZADA POR EL USUARIO------------------------------------ */

/* FALTA VER QUE NO REPITA LOS PRODUCTOS */

const borrado = document.getElementById("borrarBusqueda");

const borrarBusqueda = () => {
  if (borrado.checked) {
    mostrarProductos(productosIndex),
      (contenedorIndex.innerHTML = ""),
      (listaVacia.innerHTML = "");
  }
};

listadoProducto = [];

borrado.addEventListener("click", (e) => {
  borrarBusqueda();
  e.preventDefault();
});
