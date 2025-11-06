const product = {
  productName: 'Multimetro',
  price: 150,
  available: true,
};

Object.freeze(product);

// objeto que almacena medidas

const measurements = {
  weight: '1Kg',
  measurement: '15 Cm',
};

const features = {
  color: 'red',
  brand: 'fluke',
};
//Rest operator

const newProduct = { ...product, ...measurements, ...features };

console.table(newProduct);
console.log(product);

//
