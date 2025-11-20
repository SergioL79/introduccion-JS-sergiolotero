// Herencia

class Product {
    constructor(productName, price, ) {
        this.productName = productName;
        this.price = price;
      
    }

    formatProduct() {
        return `El nombre del producto es ${this.productName}, su precio es ${this.price} `
    }
}




const product1 = new Product('Marcador' );
const product2 = new Product('Rule' );
const product3 = new Product('Book' );

console.log(product1.formatProduct());
console.log(product2.formatProduct());
console.log(product3.formatProduct());


// class Book {
//     constructor(bookName, price, isbn) {
//         this.bookName = bookName;
//         this.price = price;
//         this.isbn = isbn;
//     }
// }


// const book1 = new Book('El perfume', 10000, 123456);
// const book2 = new Book('100 años de soledad', 50000, 546454);
// const book3 = new Book('El Coronoel', 17800, 2222222);


// console.log(book1);
// console.log(book2);
// console.log(book3);


//////
///HERENCIA
//La herencia que los objetos y clases reutilicen propiedades y metodos de otros

// class Book extends Product{
//     constructor(bookName, price, isbn) {
//         super(bookName, price);
      
//         this.isbn = isbn;
//     }

//        formatProduct() {
//         return `El nombre del producto es ${this.bookName}, su precio es ${this.price} y su ISBN es ${this.isbn} `
//     }
// }


// const book1 = new Book('El perfume', 10000, 123456);
// const book2 = new Book('100 años de soledad', 50000, 546454);
// const book3 = new Book('El Coronoel', 17800, 2222222);


// console.log(book1);
// console.log(book2);
// console.log(book3);

//===============================////

//Heredar metodo
class Book extends Product{
    constructor(bookName, price, isbn) {
        super(bookName, price);
      
        this.isbn = isbn;
    }

       formatProduct() {
        return `${super.formatProduct} y el ISBN es ${this.isbn} `
    }
}


const book1 = new Book('El perfume', 10000, 123456);
const book2 = new Book('100 años de soledad', 50000, 546454);
const book3 = new Book('El Coronoel', 17800, 2222222);


console.log(book1);
console.log(book2);
console.log(book3);

// class Medicament {
//     constructor(medicamentName, menge, price  ) {
//         this.medicamentName = medicamentName;
//         this.menge = menge;
//          this.price = price;
      
//     }

//     formatProduct() {
//         return `El nombre del Medicamento  es ${this.productName}, la cantidad disponible es ${this.menge

//         } su precio es ${this.price} `
//     }
// }

// const medi1 = new Medicament('ibuprofeno', 2 , 10000);
// const medi2 = new Medicament('Aceta', 2 , 10000);
// const medi3 = new Medicament('aspirina', 2 , 10000);

///


class Medicament extends Product {
    constructor(medicamentName, price ,menge) {
         super(medicamentName, price);
      
        this.menge = menge;
       
      
    }

       formatProduct() {
        return `${super.formatProduct} y la cantidad es ${this.menge} `
    }
}

const medi1 = new Medicament('ibuprofeno',  10000, 2);
const medi2 = new Medicament('Aceta', 10000,  2 );
const medi3 = new Medicament('aspirina', 10000,  2);



//