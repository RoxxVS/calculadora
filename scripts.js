let textoPantalla = document.getElementById('textoPantalla');
let numero1;
let numero2;
function cero() {
    textoPantalla.innerText += 0;
}
function uno() {
    textoPantalla.innerText += 1;
}
function dos() {
    textoPantalla.innerText += 2;
}
function tres() {
    textoPantalla.innerText += 3;
}
function cuatro() {
    textoPantalla.innerText += 4;
}
function cinco() {
    textoPantalla.innerText += 5;
}
function seis() {
    textoPantalla.innerText += 6;
}
function siete() {
    textoPantalla.innerText += 7;
}
function ocho() {
    textoPantalla.innerText += 8;
}
function nueve() {
    textoPantalla.innerText += 9;
}
function division() {
    textoPantalla.innerText += '/';
}
function multiplicacion() {
    textoPantalla.innerText += '*';
}
function resta() {
    textoPantalla.innerText += '-';
}
function suma() {
    textoPantalla.innerText += '+';
}
function punto() {
    textoPantalla.innerText += '.';
}
function igual() {
    let operacion = textoPantalla.innerText;
    let resultado = eval(operacion);
    textoPantalla.innerText = resultado;
}
function borrar() {
    textoPantalla.innerText = ' ';
}
