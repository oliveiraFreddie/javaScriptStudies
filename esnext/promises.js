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
