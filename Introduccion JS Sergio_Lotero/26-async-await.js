function downloadClients(){
    return new Promise(resolve => {
        // aqui va el codigo con la ruta para descargar os clientes
        console.log ('Descargando Clientes...');
        // estas lineas se ejecutan despues de pasado un tiempo determnado en la programacion
        setTimeout(() => {
            resolve('Los clientes fueron descargados')
            
        }, 5000);
    })
}


// async function app() {
//     try {
//         const clients = await(downloadClients())
//         const orders = await(downloadlastTestsOrders())
//         console.log('este codigo si se bloquea');
//         console.log(clients);
//         console.log(orders);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// app();
// console.log('Este codigo no se bloquea');


function downloadlastTestsOrders(){
    return new Promise(resolve => {
        // aqui va el codigo con la ruta para descargar las ordenes
        console.log ('Descargando Ordenes...');
        // estas lineas se ejecutan despues de pasado un tiempo determnado en la programacion
        setTimeout(() => {
            resolve('Las ordenes fueron descargadas exitosamente..')
            
        }, 7000);
    })
}



async function app() {
    try {
        //metodo mas eficiente, se ejecutan las dos al mismo tiempo
        const result = await(Promise.all([downloadClients(), downloadlastTestsOrders()]))
        console.log('este codigo si se bloquea');
        console.log(result[0]);
        console.log(result[1]);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
app();
console.log('Este codigo no se bloquea');