//Se va realizar un reproductor de canciones

const player = {
    play: function (id) {
        return (`Reproduciendo cancion...${id}`);
    },

    pause: function () {
        console.log('pausando cancion..');
    }
}

player.delete = function (id) {
    return `delete song ${id}`
}

player.reproduccion = function (id) {
    return `heavy metal list ${id}`
};
console.log(player.play(1023));
console.log(player.pause);
console.log(player.delete(34));
console.log(player.reproduccion(85));
