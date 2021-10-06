/* CLASE PRODUCTOS CREADA */
class Producto {
    constructor(nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = parseFloat(precio);
    }
    sumaIva() {
     this.precio = this.precio * 1.21;
    }
    }
    
    /* CREA LAS INSTANCIAS DEL OBJETO PRODUCTO  */
    
    const torta = new Producto("torta", "dulce", 1200);
    const bocados = new Producto("bocados", "salados", 200);
    const tarta = new Producto("tarta", "dulce", 500);
    
    
    /* CREA LISTA PRODUCTOS CON TODOS LOS PRODUCTOS DISPONIBLES */
    
    let productos = [];
    
    productos.push(torta);
    productos.push(tarta);
    productos.push(bocados);
    
    /*------------------------------------------------- SIMULADOR ------------------------------------------------------------------------- *//* -----CALCULAR EL COSTO TOTAL DE LOS PRODUCTOS SELECCIONADOS (PRECIO POR CANTIDAD DEL PRODUCTO), Y MOSTRARLO AL USUARIO--------- */
    
    /* SOLICITAR LA CANTIDAD DE PRODUCTOS A ELEGIR */
    
    let cantidad_productos = Number(prompt("Ingrese la cantidad del producto a comprar: "));
    
    console.log(cantidad_productos);
    
    /* USUARIO SELECCIONA LOS PRODUCTOS A COMPRAR  */
    
    
    let listadoProducto = [];
    
    function listado_productos(cantidad_productos){
    for (let i = 1; i <= cantidad_productos; i++){
    let tipo_productos = prompt("Ingrese el producto a comprar: ").toLowerCase();
    
    
    const eleccion = productos.filter((item) => item.nombre == tipo_productos);
    
    /* A SU VEZ GUARDA LOS PRODUCTOS ELEGIDOS EN LISTADO PRODUCTOS*/
    listadoProducto.push(...eleccion);
    }
    
    console.log(listadoProducto)
    
    return listadoProducto;
    }
    
    const listado = listado_productos(cantidad_productos);
    
    console.log(listado);
    
    /* CALCULAR EL COSTO TOTAL DE LA COMPRA */
    
    let costo_total;
    function monto() {
    let suma = 0;
    listado.forEach((item) => {
    suma += item.precio;
    });
    return suma;
    }
    
    /* LE MUESTRA EL COSTO TOTAL SEGUN LA CANTIDAD Y EL PRODUCTO ELEGIDO */
    function muestraCosto() {
    alert("El costo total de tus productos es " + monto());
    console.log(monto());
    }
    
    muestraCosto();