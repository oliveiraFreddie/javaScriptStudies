const escola = "Cod3r"

console.log(escola.charAt(4)) // letra de índice 4 da const Codr3r
console.log(escola.charAt(5)) // valor vazio, porque não existe a letra de índice 5
console.log(escola.charCodeAt(3)) // 51, valor relacionado a 3 dentro da tabela unicode
console.log(escola.indexOf('3')) // 3, índice associoado ao dígito 3

console.log(escola.substring(1)) // od3r, string a partir do índice 1
console.log(escola.substring(0, 3)) // Cod, string entre o índice 0 e 3

console.log('Escola '.concat(escola).concat("!")) // concatena
console.log('Escola ' + escola + "!") // concatena
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))