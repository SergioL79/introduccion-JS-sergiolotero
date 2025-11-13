// this en JS

// this es una palabra reservada del sustema y no podemos usarla para nombrar variables y funciones

const reservation = {
    userName: 'Sergio',
    lastName: 'Lotero',
    userAge: 47,
    totalPay: 420000,
    isPayed: true,


    information: function () {
        return (`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.totalPay}`);

    }
}

console.log(reservation.information());

const reservation3 = {
    userName: 'Carlos',
    lastName: 'Perez',
    userAge: 47,
    totalPay: 20000,
    isPayed: true,


    information: function () {
        return (`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.totalPay}`);

    }
}

console.log(reservation3.information());