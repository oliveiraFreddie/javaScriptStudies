// Implementação do map
Array.prototype.map2 = function (callback) {
    const newArray = [] // cria-se um novo array
    for (let i = 0; i < this.length; i++) { // percorre o array original
        newArray.push(callback(this[i], i, this)) // adiciona dentro do novo array o elemento transformado a partir de uma callback
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]

//Retornar um array com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)

