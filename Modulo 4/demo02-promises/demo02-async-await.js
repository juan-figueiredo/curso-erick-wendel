const { error } = require('console')
const readline = require ('readline')

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function questionAsync(texto){
  return new Promise((resolve, reject) => {
    terminal.question(`${texto} \n`, msg =>{
      !!msg? resolve(msg) : reject(new Error("Calma calabreso, o campo nao pode ser vazio"))
    })
  })
}

async function main(){
  try{
    const nome = await questionAsync("qual seu nome?")
    const telefone = await questionAsync("qual seu telefone?")
    console.log(`Nome: ${nome}, Telefone: ${telefone}`);
  } catch(error){
    console.log('Deu error', error.stack);
  } finally{
    terminal.close()
  }
}

main()
