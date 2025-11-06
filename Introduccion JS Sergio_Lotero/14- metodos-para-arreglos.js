const numbers = [2, 5, 8, 10, 15];
// Agregar elementos a mi arreglo pero se requere conocer la longitud del array.
//numbers[5] = 100;

// console.table(numbers);
//  Agrega elemtos al final del arreglo
// numbers.push(200, 500);
// console.table(numbers);

// agrega elemntos al inicio del arreglo
// numbers.unshift(-2, -1, 0);
// console.table(numbers);

// nos elimina el ultimo elemento del arreglo
// numbers.pop();
// console.table(numbers);
// nos elimina el primer numero del arreglo
// numbers.shift();
// console.table(numbers);

// elimina mtodos los elementos a partir del indice asignado
//numbers.splice(2);
//console.table(numbers);

const frutas = ['pera', 'manzana', 'naranja', 'limon'];
console.table(frutas);

numbers.push('mango');
console.table(frutas);

numbers.unshift('uva');
console.table(frutas);

numbers.splice(3);
console.table(frutas);
