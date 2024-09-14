// Arrow Function
// Arrow function é um função anonima, logo vamos sempre atribuir essa função a uma variável
// se ela não tem corpo {}, o return é implicito mas se ela tem corpo temos que explicitamente colocar o return
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametro default
function log(texto = "Node") {
  console.log(texto);
}

log();
log("Sou mais forte");

// operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}

console.log(total(2, 3, 4, 5));
