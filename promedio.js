function calcularPromedio() {
 var c1;
 var c2;
 var c3;
 var c4;
 var c5;
 var promedio;
 var campoDeTexto = document.getElementById("calificación1")
 var contenido = campoDeTexto.value;
 c1 = parseFloat(contenido);

 campoDeTexto = document.getElementById("calificación2")
 contenido = campoDeTexto.value;
 c2 = parseFloat(contenido);
 
 campoDeTexto = document.getElementById("calificación3")
 contenido = campoDeTexto.value;
 c3 = parseFloat(contenido);

 campoDeTexto = document.getElementById("calificación4")
 contenido = campoDeTexto.value;
 c4 = parseFloat(contenido);

 campoDeTexto = document.getElementById("calificación5")
 contenido = campoDeTexto.value;
 c5 = parseFloat(contenido);
 promedio = (c1 + c2 + c3 + c4 + c5) / 5;
 alert("Tu promedio es de: " + promedio);
}