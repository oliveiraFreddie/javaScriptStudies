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
// console.log(b); dara erro pois está tentando acessar b fora do bloco

// b que foi instanciada com let não pode ser acessada de fora do bloco, mas podemos acessar dentro do bloco

// Template String
const produto = "iPad";
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: "Ana", idade: 9 };
console.log(i, nome);
