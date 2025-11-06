//desestructuracion de objetos en JS
// que es la desestructuracion de objetos?
// En JS es una forma de extraer los valores del objeto y asignarlos a variables de manera directa y mas sencilla.
// const persona = {
//   userName: 'Sergio',
//   age: 42,
// };

// console.log(persona.userName);
// console.log(persona.age);

// Variables o clave son por defecto
// Desestructuracion

//const { userName, age } = persona;

//console.log(userName);
//console.log(age);

//Desestructuracion con Renombramiento de variables

// const { userName: personName, age: personAge } = persona;

// console.log(personName);
// console.log(personAge);

// este metodo me permite renobrar variables segun se necesite.

//const people = persona.username;
//console.log(people);

//Ejemplo de extracción de datos de una respuesta de una API

const response = {
  responseStatus: 200,
  data: { id: 1, productName: 'Tablet', price: 800 },
};

const {
  responseStatus,
  data: { productName, price },
} = response;

console.log(responseStatus);
console.log(productName);
console.log(price);

//
