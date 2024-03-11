const { error } = require('console')
const readline = require ('readline')

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// terminal.question('Qual é o seu nome?\n', nome => {
//   terminal.question('Qual seu telefone?\n', telefone => {
//     console.log
//     (`
//     Nome: ${nome},
//     Telefone: ${telefone}
//     `)
//     terminal.close()
//   })
// })

function questionAsync(texto){
  return new Promise((resolve, reject) => {
    terminal.question(`${texto} \n`, resolve)
  })
}

Promise.resolve()
    .then(() => questionAsync("Qual seu nome?"))
    .then(respostaNome => {
      if(!respostaNome) throw new Error("Calma calabreso")
      nome = respostaNome
  })
  .then(() => questionAsync("Qual seu telefone?"))
  .then(respostaTelefone => {
      if(!respostaTelefone) throw new Error("Calma calabresa")
      telefone = respostaTelefone
    })

    .then(() =>{
      console.log(`Nome: ${nome}, Telefone: ${telefone}`);
    })

    .catch(error =>{
      console.log('my bad, calma calabreso');
    })
    .finally(() => terminal.close())