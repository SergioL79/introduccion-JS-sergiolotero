//Fetch API
// una funci'on de JS que permite realizar peticiones Http, incluyendo GET, POST, PUT, DELETE, etc, y sobre todo es una api moderna

function getEmployees(){
    //Aqui se copiaria la URL, por ejemplo https://www.ricoprogramar.com

    const file = 'employees.json';
    fetch (file)
    // Aqui se obtienenlos datos
    .then(result => {
        return result.json();
    })
    // Se muestran los datos
    .then(data =>{// desestructuracion de objetos
        const { employees } = data;
        console.log(employees);
    // se iterapor el arreglo 
    
    employees.forEach(employe => {
        console.log(employe.id);
        console.log(employe.userName);
        console.log(employe.job);
        

        document.querySelector('.content').textContent += employe.userName;
    })

    
}); 

}

getEmployees();