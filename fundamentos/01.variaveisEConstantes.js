var a = 3
let b = 4

var a = 30
// let b = 40
// // Você pode redeclarar var mas não pode redeclarar let
// Cannot redeclare block-scoped variable 'b'.


console.log(a, b) // Resultado: 30 4

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50
// Não se pode redeclarar uma const
console.log(c)
