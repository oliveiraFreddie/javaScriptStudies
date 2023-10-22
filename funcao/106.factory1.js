// Função Factory é a função que retorna um objeto, ou seja 
// ela tem o objetivo de 'fabricar' uma estancia de um objeto.  

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())