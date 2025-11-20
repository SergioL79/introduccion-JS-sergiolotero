const buttonPermissions = document.querySelector('.button-permissions');

buttonPermissions.addEventListener('click', async() =>{
    try {
        //solicitar los permisos para el video
        await navigator.mediaDevices.getUserMedia({video: true, audio: true})
        const permissions = await Notification.requestPermission();
        // mostrar el estado del permiso
        console.log('estado del permiso', permissions);// ese estado puede ser 'granted', 'denied', 'default'

if (permissions === granted){
    new Notification('Permisos concedidos', {
        body: 'camara y microfono activados',
        icon: 'assets/img.png'
    })
}else {
    console.log('Permiso de notificaion denegado');
    
}
    }
    catch(error){
        console.log(error);
    }

});


