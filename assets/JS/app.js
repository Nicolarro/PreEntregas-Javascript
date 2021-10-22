/* ------------------------------------CLASES---------------------------------------------- */

/* CLASE PRODUCTOS CREADA */
class Producto {
  constructor(nombre, categoria, precio, stock, imagen) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = parseFloat(precio);
    this.stock = stock;
    this.imgUrl = imagen;
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
  "torta",
  "dulce",
  1200,
  50,
  "https://i.ibb.co/qrDrn0H/Torta-1.jpg"
);
const bocados = new Producto(
  "bocados",
  "salados",
  200,
  100,
  "https://i.ibb.co/ZGSygjC/Bocados-1-1.jpg"
);
const tarta = new Producto(
  "tarta",
  "dulce",
  500,
  100,
  "https://i.ibb.co/LDKgysR/Tartas-1.jpg"
);
const shots = new Producto(
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

  const boton = document.getElementById("save");
};

document.getElementById("save").addEventListener("click", (e) => {
  guardarDato(), e.preventDefault(),filtrar_productos();
});

/* USUARIO FILTRA POR LOS PRODUCTOS A COMPRAR  */

/* SE TOMA LOS DATOS BRINDADOS POR EN EL INPUT, Y SE CREA ARRAY DE LOS PRODUCTOS FILTRADOS "LISTADO PRODUCTOS" */

console.log(productos.nombre)

let eleccion = [];

function busqueda_productos() {

      let nombre_producto = document.getElementById("nombre").value;

      let tipo_productos = document.getElementById("tipo").value;


  /* SE CREA UN ARRAY CON LOS PRODUCTOS FILTRADOS POR EL USUARIO */

      const eleccion = productos.filter((productos) => productos.nombre == nombre_producto && productos.tipo == tipo_productos
      );

  /* A SU VEZ GUARDA LOS PRODUCTOS ELEGIDOS EN ARRAY LISTADO PRODUCTOS*/

  listadoProducto.push(eleccion)

  return listadoProducto
}

busqueda_productos();

console.log(eleccion);
console.log(listadoProducto);

/* QUE SE IMPRIMAN EN EL MISMO INDEX. HTML LOS PRODUCTOS FILTRADOS POR EL USUARIO */

let contenedorIndex = document.getElementById("productosFiltrados");

let listaVacia;

function filtrar_productos(listado_productos) {
  if (listadoProducto == []){
    listaVacia = createElement("p");
    listaVacia.innerHTML = `<p> La busqueda no coincide con ningun producto</p>`;
    document.body.appendChild(listaVacia);
  } else {
    localStorage.setItem("busqueda", JSON.stringify(listadoProducto));
  }

  listadoProducto.forEach((listadoProducto) => {
    contenedorIndex.innerHTML += `<div class="container-fluid">
              <div class="row containerFlex">
                <div class="col-sm-4">
                  <div class="card containerflex--estilocaja">
                    <img src=""${listadoProducto.image} alt="" width="px" height="px">
                    <div class="card-body">
                      <h5 class="card-title">"Nombre: "${listadoProducto.nombre}</h5>
                      <p>"Precio: " ${listadoProducto.precio}</p>
                      <p class="card-text">Armamos todo tipo de productos personalizados</p>
                      <a href="#" class="btn btn-primary btnCards" onclick= comprarProducto()> COMPRAR</a>
                    </div>
                  </div>
                </div>
              </div>
              </div>`;
  });
  filtrado = contenedorIndex.innerHTML;
}

console.log(listadoProducto)

/* IMPRIME TODOS LO PRODUCTOS DISPONIBLES EN EL INDEX */

let productosIndex = document.getElementById("totalProductos");

let productosDisponibles = JSON.parse(localStorage.getItem("catalogo"))

let result;
const mostrarProductos = (productosIndex) => {

  let resultado = "";
  
  productosDisponibles.forEach(productosDisponibles => {
  productosIndex.innerHTML += 
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

  resultado = productosIndex.innerHTML
}

mostrarProductos(productosIndex);