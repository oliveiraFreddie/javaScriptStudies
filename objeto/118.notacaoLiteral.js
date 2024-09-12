const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c} 
console.log(obj1, obj2) // Ambos os casos o resultado é o mesmo

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // Ambos obj3 e obj4 o resultado é o mesmo
console.log(obj4)

const obj5 = {
    funcao1: function() { // Forma antes do ES2015
        // ...
    },
    funcao2() { // Forma reduzida de criar funcao dentro de obj
        // ...
    }
}
console.log(obj5)
