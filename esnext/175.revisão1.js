//let e const
// let é a nova palavra reservada para variáveis
// var tem escopo de função ou escopo global
// let tem escopo de bloco, escopo de função e escopo global

//exemplo:

{
  var a = 2;
  let b = 3;
  console.log(b);
}
console.log(a);
//console.log(b); // não consigo acessar b fora do bloco de código

// b que foi instanciada com let não pode ser acessada de fora do bloco, mas podemos acessar dentro do bloco

// Template String
const produto = "iPad";
console.log(`${produto} é caro!`);

// Destructuring = tirar de dentro de uma estrutura algo
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: "Ana", idade: 9 };
console.log(i, nome);
