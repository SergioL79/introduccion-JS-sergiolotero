const product = {
  productName: 'Multimetro',
  price: 150,
  available: true,
};

// con el metodo o funcion frezze, bloqueamos el objeto para que no se pueda agregar, modificar, eliminar propiedades.
// Object.freeze(product);

// eliminar propiedades
// delete product.price;

// agregar propiedades
// product.color = 'Yellow';
// product.quantity = 10;

// modificar propiedades

// product.price = 200;

// console.log(product);

// el metodo seal, no permite eliminar, agregar, pero si permite modificar propiedades

Object.seal(product);
delete product.price;
product.color = 'Yellow';

product.price = 200;

console.log(product);

console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));

