const carrinho = [ // array de strings no formato JSON
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]

//Retornar um array com os preços

const paraObjeto = json => JSON.parse(json) // JSON.parse transforma string em objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto)//.map(apenasPreco)
console.log(resultado)
