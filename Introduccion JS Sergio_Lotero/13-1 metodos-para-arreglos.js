
// Recorrer un arreglo con for
const colors =['Red', 'Blue', 'Green'];
    for( let i = 0; i < colors.length; i++) {
        console.log(colors[i]);


    }
// Recorrer un arrego con for each
    const animals = ['Tiger', 'Cat', 'Dog', 'Horse'];
    animals.forEach ((animals) => {
        console.log(animals);

    })

    // Map para transformar
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares);