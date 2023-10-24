const log = console.log;

const primeiroElemento = (arrayOuString) => arrayOuString[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
})
  .then(primeiroElemento) // o resultado do primeiro then passa para o segundo então podemos ir desencadeando .thens
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(log);
