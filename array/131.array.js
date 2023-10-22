console.log(typeof Array, typeof new Array)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) //index começa do 0
console.log(aprovados[1]) 
console.log(aprovados[2]) 
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia') //adiciona elementos no final do array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //reorganiza os emelentos do array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //adiciona e remove novos elementos
console.log(aprovados)