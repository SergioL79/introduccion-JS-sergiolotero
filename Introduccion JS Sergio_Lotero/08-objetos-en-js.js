// objetos en js

const productName = 'Multimetro';
const price = 150;
const available = true;

console.log(productName);
console.log(price);
console.log(available);

const product = {
  productName: 'Multimetro',
  price: 150,
  available: true,
};

console.log(product);

// Acceder a las propiedades del objeto

console.log('The Product Name is' + product, productName);
console.log('The Price product is' + product, price);
console.log('Is available the product:' + product, available);

// agregar propiedades al objeto

product.image = 'Multimetro.png';

console.log(product);

// Eliminar una prpiedad de un objeto

delete product.price;

console.log(product);
