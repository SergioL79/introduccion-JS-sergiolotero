//Objeto literal es la forma directa de crear un objeto  usando { } y pares clave valor


// const person = {
//     userName : 'Peter'
// };


//Objeto constructor : crea objetos mediante  una fucnon o clase, usando New 

// const person1 = new person("Maaria", 25, true);
//==============================================//

//Objeto constructor 


function Producto(productName, price ) {
    this.productName = productName;
    this.price = price;
}

const Product = new Producto('Monitor curvo 24"', 600000);
const Product2 = new Producto('Mouse', 600000);
const Product3 = new Producto('KeyBoard', 600000);


console.log(Product);
console.log(Product2);
console.log(Product3);


//===============================================//

//prototype : prototipo es como un molde o modelo base 
//cuando se crean muchos objetos que se parecen , No se quieren escribir lo mismo muchas veces 

function Car(brand,color, price) {
    this.color = color;
    this.brand = brand;

}

//Se define una funcion comun para todos los carros
Car.prototype.slowDown = function(){
    console.log(this.brand + ' está frenando');
    
}

const car1 = new Car('KIA', 'gray');
const car2 = new Car('TOYOTA', 'White');

car1.slowDown();


//ejemplo con Persona 

function Person (name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;

}

Person.prototype.formatterText = function() {
    console.log(`EL usuario ${this.name} tiene ${this.age} años de edad y su correo es ${this.email}`);
}

const person1 = new Person('ALEJANDRO', 28, 'aaaa@gmail.com');
const person2 = new Person('Lucho', 28, 'aaaa@gmail.com');
const person3 = new Person('Brad', 28, 'aaaa@gmail.com');

person1.formatterText();
person2.formatterText();
person3.formatterText();


//=================================================//

//POO