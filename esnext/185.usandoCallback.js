// Nesse exemplo fazemos uma requisição http para buscar os dados em um endereço e usamos callbacks para concatenar o resultado das chamadas
// sem promise...
const http = require("http");

// além do require que é um módulo do node para fazer requisição http temos também o axios que é baseado em promise

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, (res) => {
    let resultado = "";

    res.on("data", (dados) => {
      resultado += dados;
    });

    res.on("end", () => {
      callback(JSON.parse(resultado)); // lembrando o parse converte um string json para um objeto
    });
  });
};

let nomes = [];

// getTurma("A", alunos => {
//   console.log(alunos)
// })

getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});

// essa estrutura não é interessante fica dificil de ler o código, é chamado callback hell,
// quando temos muitas callbacks aninhadas.
