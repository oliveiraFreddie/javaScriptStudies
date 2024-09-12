console.log('01)')

function operacoes(a, b) {
    const soma = a + b
    const sub = a - b
    const multi = a * b
    const div = a / b 

    console.log(`Soma: ${soma}`)
    console.log(`Subtração: ${sub}`)
    console.log(`Mutiplicação: ${multi}`)
    console.log(`Divisão: ${div}`)
}

operacoes(2,4)

console.log()

console.log('02)')

function classificarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'Equilátero' 
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) { 
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }  
}

console.log(classificarTriangulo(2,2,2))
console.log(classificarTriangulo(2,4,2))
console.log(classificarTriangulo(2,2,5))
console.log(classificarTriangulo(6,9,2))
console.log(classificarTriangulo(2,3,5))

console.log()

console.log('03)')

function baseExpoente(base, expoente) {
return Math.pow(base, expoente)
}

console.log(baseExpoente(2,4))
console.log(baseExpoente(3,4))

console.log()

console.log('04)')

function divisaoResto(dividendo,divisor) {
    const resultado = Math.floor(dividendo / divisor)
    const resto = dividendo % divisor

    console.log(`Resultado: ${resultado}`)
    console.log(`Resto: ${resto}`)
}

divisaoResto(10,3)

console.log()

console.log('05)')

function formatarDinheiro(valor) {
    // Aredonda o valor para duas casas decimais
    const valorArredondado = Math.round(valor * 100) / 100
    
    // Converte o valor arredondado para uma string formatada com separador de milhares e separador decimal adequados
    const valorFormatado = valorArredondado.toLocaleString('pt-BR', {
        style: 'currency', 
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    return valorFormatado
}

const valor = 0.30000000000000004
const valorFormatado = formatarDinheiro(valor)
console.log(valorFormatado)

console.log()

console.log('06)')

function calcularMontanteJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    const montante = capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao )
    return montante
}


function calcularMontanteJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    const montante = capitalInicial * Math.pow((1 + taxaJuros), tempoAplicacao) 
    // Math.pow = ** retorna o numero elevado a potencia
    return montante
}

const capitalInicial = 100
const taxaJuros = 10/100
const tempoAplicacao = 2

const montanteJurosSimples = calcularMontanteJurosSimples(capitalInicial, taxaJuros, tempoAplicacao)
const montanteJurosCompostos = calcularMontanteJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao)

console.log('Montante com juros simples:', montanteJurosSimples)
console.log('Montante com juros compostos:', montanteJurosCompostos)

console.log()

console.log('07)')

function resolverFormulaBahaskara(ax2, bx, c) {
    const delta = bx ** 2 - 4 * ax2 * c

    if (delta > 0) {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2) //Math.sqrt retorna a raiz quadrada de um numero
        const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        return [x1, x2]
    } else if (delta === 0) {
        const x = -bx / (2 * ax2)
        return [x0]
    } else {
        return 'Delta é negativo'
    }
}

console.log(resolverFormulaBahaskara(3, -5, 12))
console.log(resolverFormulaBahaskara(2, 3, 1))

console.log()

console.log('08)')

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
let stringPontuacoes2 = "10, 20, 20, 8, 25, 3, 0, 30, 1"
 
 
function avaliaPontuacoes (stringPontuacoes) { 
    let pontuacoes = stringPontuacoes.split(", ") //funcao split divide os elementos do array
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) { //loop for percorre as pontuacoes a partir do segundo jogo (indice 1)
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

const resultadoPedro = avaliaPontuacoes(stringPontuacoes)
const resultadoJoão = avaliaPontuacoes(stringPontuacoes2)
 
console.log('Pedro:', resultadoPedro)
console.log('João:', resultadoJoão)

console.log()

console.log('09)')

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

console.log()

console.log('10)')

function verificarDivisivelPor3(numero) {
    return numero % 3 === 0
}

console.log(verificarDivisivelPor3(9));  // true
console.log(verificarDivisivelPor3(15)); // true
console.log(verificarDivisivelPor3(7));  // false
console.log(verificarDivisivelPor3(0));  // true

console.log()

console.log('11)')

function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))

console.log()

console.log('12)')
// O fatorial de um numero é o produto de todos os numeros inteiros positivos de 1 ate o numero em questão.

function calcularFatorial(numero) {
    // Verifica se o numero é negativo ou não é um numero
    if (numero < 0 || isNaN(numero)) {
        return "Não é possivel calcular o fatorial"
    }

    // Caso especial: fatorial de 0 é 1
    if (numero === 0) {
        return 1
    }

    // Variavel para armazenar o resultado do fatorial
    let fatorial = 1

    // Loop para multiplicar os numeros de 1 ate o numero
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }

    return fatorial
}

console.log(calcularFatorial(5))
console.log(calcularFatorial(0))
console.log(calcularFatorial(10))
console.log(calcularFatorial(-5))
console.log(calcularFatorial('abc'))

console.log()

console.log('13)')

function classificarDia(diaDaSemana) {
    const domingo = 1
    const segundaFeira = 2
    const tercaFeira = 3
    const quartaFeira = 4
    const quintaFeira = 5
    const sextaFeira = 6
    const sabado = 7

    switch(diaDaSemana) {
        case 1: case 7:
            console.log( 'Fim de semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil')
            break
        default:
            console.log('Dia Inválido')
    }
}

classificarDia(1)
classificarDia(2)
classificarDia(3)
classificarDia(4)
classificarDia(5)
classificarDia(6)
classificarDia(7)
classificarDia(8)

console.log()

console.log('14)')

function classificarFruta(nomeFruta) {
    switch(nomeFruta) {
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Isso não é fruta meu amigo'
    }
}

console.log(classificarFruta('maçã'))
console.log(classificarFruta('kiwi'))
console.log(classificarFruta('melancia'))
console.log(classificarFruta('queijo'))

console.log()

console.log('15)')

function carrosDoEstande(tipoVeiculo) {
    switch(tipoVeiculo) {
        case 'hatch':
            console.log('Compra efetuada com Sucesso!')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere esse modelo?')
            break
        default:
            console.log('Não trabalhamos com esse tipo de automóvel aqui')
    }
}

carrosDoEstande('hatch')
carrosDoEstande('sedan')
carrosDoEstande('motocicleta')
carrosDoEstande('caminhonete')
carrosDoEstande('barco')

console.log()

console.log('16)')

function calculadoraBasica(valor1, operacao, valor2) {
    switch(operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadoraBasica(2, '+', 3))
console.log(calculadoraBasica(2, '-', 3))
console.log(calculadoraBasica(2, '*', 3))
console.log(calculadoraBasica(2, '/', 3))
console.log(calculadoraBasica(2, '**', 3))

console.log()

console.log('17)')

function calcularReajuste(plano, salarioAtual) {
    switch(plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000))
console.log(calcularReajuste('B', 1000))
console.log(calcularReajuste('C', 1000))
console.log(calcularReajuste('D', 1000))

console.log()

console.log('18)')

function lerNumero(numero) {
    switch(numero) {
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'tres'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return 'Número fora do intervalo'
    }
}

console.log(lerNumero(11))
console.log(lerNumero(9))
console.log(lerNumero(8))
console.log(lerNumero(7))
console.log(lerNumero(6))
console.log(lerNumero(5))

console.log()

console.log('19)')

function calcularPedidoCliente(codigoProduto, qtd) {
    let valorTotal = 0
    let nomeProduto = ''
    switch(codigoProduto) {
        case 100:
            valorTotal = qtd * 3
            nomeProduto = 'Cachorro Quente'
            break
        case 200:
            valorTotal = qtd * 4
            nomeProduto = 'Haburger Simples'
            break
        case 300:
            valorTotal = qtd * 5.5
            nomeProduto = 'Cheeseburger'
            break
        case 400:
            valorTotal = qtd * 7.5
            nomeProduto = 'Bauru'
            break
        case 500:
            valorTotal = qtd * 3.5
            nomeProduto = 'Refrigerante'
            break
        case 600:
            valorTotal = qtd * 2.8
            nomeProduto = 'Suco'
            break
        default:
            console.log('Produto não existente.')
            return
    }

    console.log('Produto: ' + nomeProduto)
    console.log('Valor a ser pago: R$ ' + valorTotal.toFixed(2))
}

calcularPedidoCliente(100,2)
calcularPedidoCliente(300,4)
calcularPedidoCliente(600,10)
calcularPedidoCliente(800,2)
calcularPedidoCliente(5000,2)

console.log()

console.log('20)')

function contarCedulas(valor) {
    let cedulas = [100, 50, 10, 5, 1] // Array com os valores das cédulas disponíveis
    let quandidadeCedulas = [0, 0, 0, 0, 0] // Array para armazenar a quantidade de cada cédula
    let resultado = '' // Variável para armazenar o resultado

    for (let i = 0; i < cedulas.length; i++) { // Loop para percorrer as cédulas
        quandidadeCedulas[i] = Math.floor(valor/cedulas[i]) // Calcula a quantidade de cédulas necessárias
        valor %= cedulas[i] // Atualiza o valor restante
        if (quandidadeCedulas[i] > 0) { // Se a quantidade de cédulas for maior que zero, adiciona a informação no resultado
            resultado += quandidadeCedulas[i] + ' nota(s) de R$' + cedulas[i] + '. '
        }
    }

    return resultado.trim() // Retorna o resultado obtido, removendo possíveis espaços em branco no início e no final
}

console.log(contarCedulas(24))
console.log(contarCedulas(2564))
console.log(contarCedulas(2))
console.log(contarCedulas(596))



