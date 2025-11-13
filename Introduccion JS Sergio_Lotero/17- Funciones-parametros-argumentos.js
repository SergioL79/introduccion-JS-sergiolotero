
// los parametros se pasan por los parentesis de la funcion
function add(num1, num2) {// estos son los parametros
    console.log(num1 + num2);
};
add(7, 10);// Estos son los argumentos y solo actuan en tiempo de ejecucion.
add(11, 12);
add(15, 13);
add(6, 19);


const add2 = function (num3, num4) {
    console.log(num3 + num4);
}

add(5, 1);

// funcion con valores por defecto
function add3(num5 = 9, num6 = 3) {
    console.log(num5 + num6)
};

add3()