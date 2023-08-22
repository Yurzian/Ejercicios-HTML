// ANIMACION DE MOSTRAR Y ESCONDER MENÚ
var toggleButton = document.getElementById("toggleButton");
var toggleDiv = document.getElementById("toggleDiv");

toggleDiv.style.width = "0px";
toggleDiv.style.height = "0px";

toggleButton.addEventListener("click", function() {
  if (toggleDiv.style.width === "0px") {
    toggleDiv.style.width = "250px";
    toggleDiv.style.height = "auto";
  } else {
    toggleDiv.style.width = "0px";
    toggleDiv.style.height = "0px";
  }
});

// BOTONES PARA CAMBIAR EL IFRAME

const iframe = document.getElementById("iframe1");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("boton9");

boton1.addEventListener("click", function() {
  iframe.src = "recibidos.html";
});

boton2.addEventListener("click", function() {
  iframe.src = "chat.html";
});

boton3.addEventListener("click", function() {
  iframe.src = "spaces.html";
});

boton4.addEventListener("click", function() {
  iframe.src = "meet.html";
});

boton5.addEventListener("click", function() {
  iframe.src = "recibidos.html";
});

boton6.addEventListener("click", function() {
  iframe.src = "destacados.html";
});

boton7.addEventListener("click", function() {
  iframe.src = "pospuestos.html";

});

boton8.addEventListener("click", function() {
  iframe.src = "enviados.html";
});

boton9.addEventListener("click", function() {
  iframe.src = "borradores.html";
});

