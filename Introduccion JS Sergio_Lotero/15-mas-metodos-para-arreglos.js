// Metodos para arreglos

// crear un arreglo para un carrito de compras

const months = ['December', 'November', 'January', 'February']

const shoppingCar = [
    { productName: 'Tablet', price: 800 },
    { productName: 'Mouse', price: 50 },
    { productName: 'Smart Tv', price: 1500 },
    { productName: 'Computer', price: 2000 },
    { productName: 'PlayStation', price: 1800 },
    { productName: 'X-box', price: 1800 },
    { productName: 'Keyboard', price: 400 },
    { productName: 'Sound-bar', price: 700 },
    { productName: 'Nintendo Wii', price: 900 },
]

//months.forEach(function (month) {
//console.log(months)
//});

//months.forEach(function (month) {
//  if (month == 'January'){
//     console.log('January si existe');

//  else{
//  console.log('El mes no existe');
//  }

//   }
//console.log(months)
//});

//const month = months.includes('December');
//console.log(months);

// el metodo includes no funciona bien con objetos
//const product = shoppingCar.includes('Tablet');
//console.log(product);

// para arregos planos se usa includes, y para objetos se usa some
// const result = shoppingCar.some(function(product){
//      return product.productName === 'Tablet';
// })

//const result = shoppingCar.some(product => product.productName === 'Tablet');

//console.log(result);

// el metodo reduce nos sirve para realizar la sumatoria de precios
//const result = shoppingCar.reduce(function(total, product){
//return total + product.price
//}, 0);

//const result = shoppingCar.reduce((total, product,) => total + product.price, 0);
//console.log(result);

// Método filter

//const result = shoppingCar.filter(function (product) {
//return product.price > 100;
//});

//console.log(result);

//const result = shoppingCar.filter(product => product.price > 100);

//const result2 = shoppingCar.filter(product => product.productName === 'Sound-bar');

//console.log(result2);

const result2 = shoppingCar.filter(product => product.productName != 'Sound-bar');

console.log(result2);




