function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      com.log('temp')
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e)
    }
  })
}

funcionarOuNao('Testando...', 0.5)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log('Quase Fim!'))
  .catch((err) => console.log(`Erro Geral: ${err}`)) // depois do .catch não tem mais dados
  .then(() => console.log('Fim!'))
