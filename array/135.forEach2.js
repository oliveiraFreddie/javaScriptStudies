Array.prototype.forEach2 = function(callback) { //implementando o proprio forEach
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const pilotos = [ 'Fred', 'Bia', 'Luana', 'Brenno']

pilotos.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})