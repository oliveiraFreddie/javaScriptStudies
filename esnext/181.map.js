// Map é uma estrutura nova do JS que é parecida com um objeto mas no caso do map a chave pode ser uma estrutura dinamica e não apenas um literal como acontece no objeto
const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react); // undefined, para acessar precisa usar o get como no exemplo abaixo
console.log(tecnologias.get("react").framework); // forma correta para acessar a chave

const chavesVariadas = new Map([
  [function () { }, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has());
console.log(chavesVariadas.size);

chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b");
chavesVariadas.set(456, "b");
console.log(chavesVariadas);
