const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona elemento no final do array
console.log(pilotos)

pilotos.shift() //remove primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona elemento no inicio do array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) //novo array a partir do indice 2
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1, 4) //novo array do indice 1 ao indice 3(o 4o elemento não entra)
console.log(algunspilotos2)

