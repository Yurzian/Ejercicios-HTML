const imgmapa = document.getElementById("imgmapa");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");

boton1.addEventListener("click", function() {
  imgmapa.src = "imagenes/mapa1.PNG";
});

boton2.addEventListener("click", function() {
  imgmapa.src = "imagenes/mapa2.PNG";
});

boton3.addEventListener("click", function() {
  imgmapa.src = "imagenes/mapa3.PNG";
});

boton4.addEventListener("click", function() {
  imgmapa.src = "imagenes/mapa4.PNG";
});
