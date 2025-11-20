//Try catch
// es una estrucutura para manejar errores en tiempo de ejecucion permitiendo que el programa continue ejecutandose sin fallar completamente
// try : dentro de este bloque se coloca el codigo  que puede generar error 
//catch : Captura el error si ocurre dentro del bloque try y permite manejarlo 
//finally (optional): ejecuta el codigo siempre ocurra o no un error 

// const num1 = 20;
// const num3 = 30;


//   console.log(num1);
// console.log(num2);
// console.log(num3);


// try {
  
// } catch (error) {
//     console.log('Error variable no ha sido creada');
    
// }

///====================================================================================================

try {
  console.log(x);
  
} catch (error) {
    console.log('ocurrio un error' , error.message);
    
}

///====================================================================================================

//un try con error personalizado throw
try {
  const age = 'Hola';

  if (isNaN(age)) throw "la edad debe de ser un numero";
  
} catch (error) {
    console.log('error personalizado' , error);
    
}

///====================================================================================================

//capturar error en funcion


function divide (a,b) {

    try {
         if (b === 0 ) throw "No se puede divifir sobre cero";
         console.log("despues del throw");

         return a/b;
         

    } catch (error) {
        return "Error" + error;
    }
   
}

console.log(divide(10,2));

