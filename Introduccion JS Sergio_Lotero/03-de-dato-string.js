//String o cadena de texto

const userName ="Carlos";
const name1 ="Edwar";
console.log(typeof userName)
console.log(userName)

//dos formas no tan comunes

const userName2 = String("Vero");
console.log(userName2)

// Creamos un variable mediante el constructor, instanciando a partir dela palabra new.
//instanciar, es el proceso mediante el cual yo creo un objeto a partir de una clase.

const userName4 = new String("Vero");
console.log(typeof userName4);

let product ="Televisor de 50";
console.log(product)

let product2 ="Televisor de 50\"";
console.log(product2)

let prhase = "Estamos aprendiendo JS en el CDTI"
console.log (prhase.length);
console.log (prhase.indexOf("JS"));

// busca si una cadena existe y me da su indexacion, si es resultado es menor que 0, la cadena no existe


console.log(prhase.includes("JS"));

//Metodo mas moderno para 