function calcularArea() {
 var area;
 var base;
 var pies;
 var altura;
 var pies = base * altura;
 var area = base * altura;
var campoDeTexto = document.getElementById("largo")
var contenido = campoDeTexto.value;
 altura = parseFloat(contenido);

 campoDeTexto = document.getElementById("ancho")
 contenido = campoDeTexto.value;
 base = parseFloat(contenido);

area = ( base * altura);
pies = ( base * altura) * 10.764;
 alert("El area es de: " + area + " metros cuadrados, o: " + pies + " pies cuadrados");
}