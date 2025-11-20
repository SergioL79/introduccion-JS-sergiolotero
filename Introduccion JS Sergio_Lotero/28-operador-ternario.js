//operador ternario: En JS es una forma corta, elegante y moderna de escribir una estructura if-else,

//se llama ternario por que utiliza 3 operandos

// estructura es: condicion ? valorSiVerdadero: valorSiFalso.

// Ejemplo !

let age = 43;
let message = age >= 18 ? "eres mayor de edad" : "Eres menor de edad"

console.log(message);

let userName = "Sergio";
let greeting = userName ? `Hola, ${userName}` : `Hola, invitado`
console.log(greeting); 