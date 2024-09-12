// this é uma das estranhesas de JavaScript 
// ele é uma forma de referenciar o objeto atual daquela execução
// dentro de javascript vai depeender da forma que voce chama a funcão
// para determinar o que o this vai referenciar, podendo apontar pro escopo global ou não

function f1() { console.log(this === global) }
f1() 
// chamando a funcão dessa forma this aponta para o escopo global

const person = {
    name: "John",
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  person.greet(); // Output: Hello, my name is John
// Nesse exemplo, temos um objeto person com uma propriedade name e um método greet. 
// Dentro do método greet, usamos this.name para acessar a propriedade name do objeto em que a função está sendo chamada.
// Quando chamamos person.greet(), o valor de this é definido pelo objeto person, 
// pois a função é executada no contexto do objeto. Isso é conhecido como contexto léxico, 
// onde this se refere ao objeto que contém a função. Assim, ao chamar person.greet(), 
// a saída será "Hello, my name is John", pois this.name está se referindo à propriedade name do objeto person.
  