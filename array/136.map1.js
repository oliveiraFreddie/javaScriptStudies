// A função map serve para fazer uma transformação no array, ou seja mapear para um outro array com os dados transformados
// O resultado do map sempre gera um array do mesmo tamanho

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function (e) {
    return e * 20
}) // map gerou um novo array com a mesma quantidade de posições cada elemento multiplicdo por 20

console.log(resultado) // [ 20, 40, 60, 80, 100 ]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // Função para formatar o numúmero pra Real

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // utilizando map de forma encadeada e utilizando as funções criadas 
console.log(resultado)

const nums2 = [1, 2, 3, 4, 5, 6, 7]
const a10 = e => e * 10

result = nums2.map(a10).map(paraDinheiro)
console.log(result)


