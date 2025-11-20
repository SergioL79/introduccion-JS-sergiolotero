25-media-devices-api.js// notification API

//Es una intefaz del navegador que permite a las aplicaciones web , mostrar notificaciones nativas del S.O incluso 
// cuando la ventana no está activa



// const button = document.querySelector('.button');

// button.addEventListener('click', () => {
//     console.log("You made click, on the  button ");
    
// })

//=================================================================


//Seleccionar la clase Button en el DOM 

const button = document.querySelector('.button');

button.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification("Esta es una notificacion", {
                    body : "Aprendiendo JS en la U",
                    icon : "assets/img.png"
            })
            
        }else {
            console.log('Permiso Denegado ');
            
        }
    })
    console.log("Permiso concedido");
    
})