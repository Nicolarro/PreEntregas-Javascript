
/* ------------------------------------CLASES---------------------------------------------- */

/* CLASE PRODUCTOS CREADA */
class Producto {
    constructor(nombre, categoria, precio,stock,imagen) {
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

    const crearProducto = (nombre,categoria,precio,stock,imagen) => {
        const producto = new Producto(nombre,categoria,precio,stock,imagen)
    }

    /* CREO FUNCION PARA CREAR PRODUCTOS */

  /*-------------------------------------INSTANCIAS-----------------------------------------------------------------   */ 

  /* PRODUCTO */
    
    const torta = new Producto("torta", "dulce", 1200, 50,"https://i.ibb.co/qrDrn0H/Torta-1.jpg");
    const bocados = new Producto("bocados", "salados", 200, 100,"https://i.ibb.co/ZGSygjC/Bocados-1-1.jpg");
    const tarta = new Producto("tarta", "dulce", 500, 100,"https://i.ibb.co/LDKgysR/Tartas-1.jpg");
    const shots = new Producto ("shots","dulce",500,100,"https://i.ibb.co/nbkhCff/Shots-1.jpg");
    
    
    /* CREA LISTA PRODUCTOS CON TODOS LOS PRODUCTOS DISPONIBLES */
    
    let productos = [];
    
    productos.push(torta);
    productos.push(tarta);
    productos.push(bocados);
    productos.push(shots);

    console.log(productos)

    /* GUARDAR LISTA EN ALMACENAMIENTO LOCAL, EN FUNCION "GUARDAR BASE" */

   const guardarBase = (clave,valor) =>{localStorage.setItem(clave,valor)}

    for (const producto of productos){
      guardarBase("catalogo", JSON.stringify(productos))
    }

    
    /*------------------------------------------------- SIMULADOR ------------------------------------------------------------------------- *//* -----CALCULAR EL COSTO TOTAL DE LOS PRODUCTOS SELECCIONADOS (PRECIO POR CANTIDAD DEL PRODUCTO), Y MOSTRARLO AL USUARIO--------- */
    

    /* USUARIO FILTRA POR LOS PRODUCTOS A COMPRAR  */

      /* SE TOMA LOS DATOS BRINDADOS POR EN EL INPUT, Y SE CREA ARRAY DE LOS PRODUCTOS FILTRADOS "LISTADO PRODUCTOS" */

  
    let listadoProducto = [];
    
    function filtrar_productos(){

    if (listadoProducto != "") {
        listadoProducto = []
    }

    else{

    let nombre_producto = document.getElementById("nombre").value

    let tipo_productos = document.getElementById("tipo").value

    /* SE CREE UN ARRAY CON LOS PRODUCTOS FILTRADOS POR EL USUARIO */
    
     const eleccion = productos.filter((item) => (item.nombre == nombre_producto) && (item.tipo == tipo_productos));

        /* A SU VEZ GUARDA LOS PRODUCTOS ELEGIDOS EN ARRAY LISTADO PRODUCTOS*/

     listadoProducto.push(...eleccion);
    }
    
    console.log(listadoProducto)

    filtrar_productos();

    /* QUE SE IMPRIMAN EN EL MISMO INDEX. HTML LOS PRODUCTOS FILTRADOS POR EL USUARIO */

    for(productos of listadoProducto){
        let caja = document.createElement("div")
   
      caja.innerHTML = `<h3>Nombre: ${productos.nombre}</h3>
                       <h3>Cantidad Comprada: ${cantidad_productos} </h3> `
                       
       document.body.appendChild(caja);
   }
    return listadoProducto;
     
    }

    const listado = listado_productos();
    
    console.log(listado);

/* ----------------------------------------------------------------------- *

        /* CALCULAR EL COSTO TOTAL DE LA COMPRA */
    
        let costo_total;
    
        function monto() {
        let suma = 0;
        listado.forEach((item) => {
        suma += item.precio;
        });
        return suma;
        }
        
        /* SE IMPRIME CON UN INNER HTML EL MONTO TOTAL DE LA OPERACION */

        function muestraCosto() {
    
            let contenedor = document.createElement("div")

            contenedor.innerHTML = `<h4> Costo Total: ${monto}</h4>`;
            document.body.appendChild(contenedor)
        }

        console.log(muestraCosto());
        muestraCosto();

    /* QUE GUARDE LOS DATOS  */

    const guardarDato = () =>{

        nombre_producto = document.getElementById("nombre").value
        
        tipo_productos = document.getElementById("tipo").value
    
        const boton = document.getElementById("save")
   
        }
        
        document.getElementById("save").addEventListener("click", (e) => {
            e.preventDefault(), guardarDato()})
        
    
        console.log(guardarDato());
    
        
