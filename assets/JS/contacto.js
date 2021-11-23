/* CLASES */

class Cliente {
  constructor(nombre, apellido, email, tipoEvento, comentarios) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.tipoEvento = tipoEvento;
    this.comentarios = comentarios;
  }
}

/* OBJETO CLIENTES */

const cliente = new Cliente({
  nombre: document.getElementById("nombre").value,
  apellido: document.getElementById("apellido").value,
  email: document.getElementById("email").value,
  tipoEvento: document.getElementById("tipoEvento").value,
  comentarios: document.getElementById("comentarios").value,
});






/* ---------------------------------------------JQUERY------------------------------------------------------ */

/* DARKMODE UTILIZADO PARA CAMBIAR DE COLOR EL FONDO*/

const darkMode = () => {
  $("body").css("background-color", "black");
  $("label").css("color", "black");
  $("h1").css("color", "black");
  localStorage.setItem("theme", "dark");
};

const ligthMode = () => {
  $("body").css("background-color", "white");
  $("label").css("color", "black");
  $("h1").css("color", "black");
  localStorage.setItem("theme", "ligth");
};

$("#cambiarFondo").on("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    ligthMode();
  } else {
    darkMode();
  }
});
