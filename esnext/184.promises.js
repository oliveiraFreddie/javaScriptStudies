// como o próprio nome diz é uma promessa, é usado quando vamos ter algum tipo de processamento assíncrono
// ela tem dois resultados possíveis, a promessa ser cumprida ou a promessa não ser
// por isso ela é um um contrutor que recebe 2 parametros, resolve e reject

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase); // aceita apenas um unico parametro
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Que legal!")
  .then((frase) => frase.concat("?!?"))
  .then((outraFrase) => console.log(outraFrase)); // posso encadear varios .then
// .catch(e => console.log(e)); usando o reject para pegar o erro
