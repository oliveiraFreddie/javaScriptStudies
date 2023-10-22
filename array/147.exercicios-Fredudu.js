console.log('01)')

function cumprimentar(nome) {
    return  'Olá, ' + nome + '!'
}

console.log(cumprimentar('Fred'))

function cumprimentar2(nome) {
    const saudação = 'Olá'
    return [saudação, nome].join(', ').concat('!') 
}

console.log(cumprimentar2('Fred'))

function cumprimentar3(nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar3('Fred'))

console.log('02)')

function idadeEmDias(idade) {
    return (idade * 365)
}

console.log('Fred tem ' + (idadeEmDias(28) + ' dias de vida.'))

function idadeEmDias2(idade) {
    return `Fred tem ${idade * 365} dias de vida.`
}

console.log(idadeEmDias2(28))

idadeEmDias3 = idade => `Fred tem ${idade * 365} dias de vida.`
console.log(idadeEmDias3(28))

console.log('03)')

calcularSalario = (quantidadeHoras, valorHora) => { 
    const salarioBruto = quantidadeHoras * valorHora
    const salarioFinal = salarioBruto - salarioBruto * 30 / 100
    return `Salário igual a R$ ${salarioFinal}`
}

console.log(calcularSalario(160,12))

console.log('04)')

nomeDoMes = mes => {
    switch(mes) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Feveireiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5: 
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
        default:
            return 'Mês inválido'
    }    
        
}
console.log(nomeDoMes(1))
console.log(nomeDoMes(13))
console.log(nomeDoMes(12))

nomeDoMes2 = mes => {
    const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Junlho', 
    'Agosto', 'Setembro', 'Outrubro', 'Novembro', 'Dezembro']
    return mapeamento [-- mes]
}

console.log(nomeDoMes2(1))
console.log(nomeDoMes2(12))
console.log(nomeDoMes2(14))

console.log('05)')

maiorOuIgual = (primeiro, segundo) => {
    if(typeof primeiro != typeof segundo) return false
    
    return primeiro >= segundo
    }

console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(2,0))
console.log(maiorOuIgual('1',0))

console.log('06)')

boleanoOuInverso = (valor) => {
    const tipo = typeof valor
    if( tipo == "boolean") return !valor
    else if( tipo == "number") return -valor
    else return `Boleano ou número esperados, mas o parametro é do tipo ${tipo}`
}    

console.log(boleanoOuInverso(false))
console.log(boleanoOuInverso(true))
console.log(boleanoOuInverso(1))
console.log(boleanoOuInverso('fred'))

console.log('07)')

estaEntre = (minimo, maximo, numero, inclusivo = false) => {
    if(inclusivo) return numero >= minimo && numero <= maximo
    
    return numero > minimo && numero < maximo

}

console.log(estaEntre(10,100,50))
console.log(estaEntre(16,50,160))
console.log(estaEntre(3,150,3, true))

console.log('08)')

multiplicar = (inteiroA, inteiroB) => {
    let resultado = 0
    for(let i = 0; i < inteiroB; i++)
    resultado += inteiroA
    return resultado

}

console.log(multiplicar(9,2))

multiplicar2 = (numero, mutiplicador) => {
    if( numero === 0 || mutiplicador === 0) return 0

    return mutiplicador === 1 ? numero : numero + multiplicar2(numero, mutiplicador-1)
}

console.log(multiplicar2(9,2))

console.log('08)')

repetir = (item, quantidade) => {
    // Cria um array vazio para armazenar o resultado
    let resultado = [];
    // Inicia um loop que vai de 0 até a quantidade desejada
    for (let i = 0; i < quantidade; i++) {
        // A cada iteração do loop, adiciona o item ao array resultado
        resultado.push(item);
    }
    // Retorna o array resultado com os itens repetidos
    return resultado;
}
// Chama a função repetir, passando a string 'carro' e o número 4 como argumentos
console.log(repetir('carro', 4));
console.log(repetir('piu', 80));

repetir2 = (item, quantidade) => {
    return Array(quantidade).fill(item)
}

console.log(repetir2('carro', 4));
console.log(repetir2('piu', 80));

console.log('09)')

simboloMais = (multiplicador) => {
    let resultado = ''
    for(let i = 0; i < multiplicador; i++)
        resultado += '+'
    return resultado
}

console.log(simboloMais(9))

simboloMais2 = (multiplicador) => {
    return Array(multiplicador).fill('+').join('')
}

console.log(simboloMais2(3))

simboloMais3 = (multiplicador) => {
    return '+'.repeat(multiplicador)
}

console.log(simboloMais3(5))

console.log('10)')

retornarPrimeiroEUltimo = (array) => {
    // Verifica se o array tem pelo menos um elemento
    if (array.length === 0) { return [] } 
    // Retorna um array vazio se o array original estiver vazio
    const first = array[0] // Obtém o primeiro elemento do array
    const last = array[array.length - 1] // Obtém o último elemento do array
    return [first, last] // Retorna um novo array com o primeiro e o último elemento
}

const originalArray = [1, 2, 3, 4, 5, 6, 7]
const resultArray = retornarPrimeiroEUltimo(originalArray)

console.log(resultArray)

retornarPrimeiroEUltimo2 = (elementos) => {
    const primeiroElemento = elementos.shift() //returna primeiro elemento do array
    const ultimoElemento = elementos.pop() //retorna segundo elemento do array

    return [primeiroElemento, ultimoElemento]
}

console.log(retornarPrimeiroEUltimo2(['fred', 1, 'bia', 3, 4, 5, 8, 124, 6]))

console.log('11)')

removerPropriedade = (objeto, nomePropriedade) => {
    const copia = Object.assign({}, objeto); // Cria uma cópia do objeto usando Object.assign()
    delete copia[nomePropriedade]; // Remove a propriedade especificada da cópia do objeto
    return copia; // Retorna a cópia do objeto modificada
};  

const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
};
  
console.log("Objeto original:", pessoa); 
const novaPessoa = removerPropriedade(pessoa, "idade");
console.log("Objeto com propriedade removida:", novaPessoa);

removerPropriedade2 = (objeto, nomePropriedade) => {
    const copia = { ...objeto }; // Cria uma cópia do objeto usando o operador spread (...)
    delete copia[nomePropriedade]; // Remove a propriedade especificada da cópia do objeto
    return copia; // Retorna a cópia do objeto modificada
};
  
// Exemplo de uso
const pessoa2 = {
    nome: "Maria",
    idade: 30,
    cidade: "Rio de Janeiro"
};
  
console.log("Objeto original:", pessoa2);
const novaPessoa2 = removerPropriedade2(pessoa2, "idade");
console.log("Objeto com propriedade removida:", novaPessoa2);

console.log('12)')

filtrarNumeros = (array) => {
    return array.filter(item => typeof item === "number")
    }

console.log(filtrarNumeros([1, 3, 6, 'renata', 5, 'fred']))

filtrarNumeros2 = (array) => {
    const resultado = []
    for(let item of array)
        if(typeof item === 'number')
        resultado.push(item)
    return resultado
        
}

console.log(filtrarNumeros2([1, 3, 6, 'renata', 5, 'fred']))

console.log('13)')

objetoParaArray = (objeto) => {
    return Object.entries(objeto) // retorna um array de arrays contendo as entradas do objeto
}

let person = {
    nome: 'Maria',
    idade: 28,
    profissao: 'Medica'
}

let arrayPessoa = objetoParaArray(person)
console.log(arrayPessoa)

objetoParaArray2 = (objeto) => {
    const resultado = []
    for(let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
}

let person2 = {
    nome: 'Pedro',
    idade: 19,
    profissao: 'Delegado'
}

let arrayPessoa2 = objetoParaArray2(person2)
console.log(arrayPessoa2)

console.log('14)')

numeroEIndicePares = (array) => {
    const resultado = array.filter((elemento, indice) => {
        return elemento % 2 === 0 && indice % 2 === 0
    })
    return resultado
}

let nums = [2, 3, 4, 5, 6, 7, 8]
let elementosFiltrados = numeroEIndicePares(nums)

console.log(elementosFiltrados)

console.log('15)')

checarBissexto = (ano) => {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPor400 = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPor400
}

console.log(checarBissexto(2020))
console.log(checarBissexto(2015))

console.log('16)')

function somarElementos(array) {
    // Utilizamos o método reduce() para iterar sobre cada elemento do array e acumular a soma.
    const soma = array.reduce((acumulador, elemento) => {
      return acumulador + elemento;
    }, 0);
    // O segundo argumento do reduce() é o valor inicial do acumulador, neste caso, 0.
  
    // Retorna o valor final da soma.
    return soma;
}

let numero = [1, 2, 3, 4, 5, 6]
let resultado = somarElementos(numero)

console.log(resultado)

somarNumeros2 = (numeros) => {
    let soma = 0; // Variável para armazenar a soma dos números
    
    numeros.forEach(numero => soma += numero); // Itera sobre cada número do array e acumula na variável soma
    // A função forEach() é utilizada para percorrer cada elemento do array "numeros".
    // Para cada número, é somado ao valor atual da variável soma.
  
    return soma; // Retorna o valor final da soma
}
  
console.log(somarNumeros2([1, 2, 3, 4, 5, 6]));

console.log('16)')

despesasTotais = (itens) => {
    let total = 0; // Variável para armazenar o total das despesas  
    for (let item of itens) {
      total += item.valor; // Adiciona o valor de cada item ao total
    }  
    return total; // Retorna o total das despesas
}
  

const despesas = [
    {nome: 'Conta de agua', valor: 50.00},
    {nome: 'Conta de luz', valor: 35.00},
    {nome: 'Internet', valor: 42.00},
    {nome: 'Gas', valor: 28.00}
]

console.log(despesasTotais(despesas))

despesasTotais2 = (itens) => {
    return itens
      .map(item => item.valor) // Extrai o valor de cada item do array
      .reduce((acumulador, valorAtual) => (acumulador + valorAtual)); // Realiza a redução somando todos os valores
}
  

console.log(despesasTotais2(despesas))

console.log('17)')

calcularMedia = (numeros) => {
    let quantidadeNumeros = numeros.length // define o tamanho do array
    let resultado = 0 // variavel para armazenar o resultado w
    for( let numero of numeros) {
        resultado += numero
    }
    return resultado / quantidadeNumeros
}

let numeros = [1, 2, 3, 4, 5]

console.log(calcularMedia(numeros))

  






  
  




    