const log = console.log

// setTimeout(function () {
//   log('Executando callback...')

//   setTimeout(function () {
//     log('Executando callback...')

//     setTimeout(function () {
//       log('Executando callback...')
//     }, 2000)
//   }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      log('Executando promise...')
      resolve()
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)
