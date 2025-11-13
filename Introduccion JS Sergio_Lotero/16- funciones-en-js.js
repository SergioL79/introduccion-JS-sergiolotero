// Funciones en JS

// Hoisting: es el comportamiento por defecto en el que el interpretemueve las declaraciones(variables y funciones), a la parte superior de su ámbito(scope), se ahce antes de ejecutar el codigo.

//Declaracion de una función.

function add() {
    console.log(10 + 20);

}

add();

// La expresion de la funcion

const add2 = function () {
    console.log(30 + 40);
}

add2();

// funcion iife, esta funcion se invoca a si misma
// son utiles para proteger variables para que no se mezclen con las variables de otros archivos

(function () {
    console.log('Esto es una funcion IIFE');

})();

//console.log(client);

// diferencia entre función y metodo

const num1 = 20;
const num2 = '10';

console.log(num1);
console.log(num2);

// funcion que convierte string a numero
console.log(parseInt(num2));

// Metodo que convierte de numero a string
//para un metoo siempre ponemos una variable y un punto

console.log(num1.toString());
