// const numbers = [2, 5, 8, 10, 15];

//console.table(typeof numbers);
// instanciar: es el proceso mediente el cual yo creo un objeto a partir de una clase
const months = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(typeof months);

months.forEach(function (mes) {
  console.log(mes);
});

// los arreglos en JS aceptan todos los tipos de datos del lenguaje
const userName = 'Carlos';

const myArray = [
  'Hello',
  userName,
  42,
  true,
  false,
  null,
  { lastName: 'Lotero', myjob: 'Developer' },
  [3172293, 2999912, 3145478],
];
console.table(myArray);

//  consultar el valor del elemento y su tipo
// console.log(typeof myArray[3]);
///Metodo para conocer la ongitud de un arreglo

// console.log('Carlos tu arreglo tiene: ' + myArray.length + ' elementos');

// const numbers = [2, 5, 8, 10, 15];
// iterador con forEach

// numbers.forEach(function (number) {
//   console.log(number);
// });

//
