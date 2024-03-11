const args = process.argv 
const saldo = args[args.length - 1]

if(isNaN(saldo)){
  console.log('Valor inválido');
  return
}

let tipoCliente = ""

if (saldo < 9){
  tipoCliente = "Basic"
}else if (saldo >= 10 && saldo < 20){
  tipoCliente = "Gold"
}else if( saldo > 20){
  tipoCliente = "Diamond"
}else {
  tipoCliente = null
}

if(!tipoCliente){
  tipoCliente = "Indefinido"
}

console.log("Tipo do cliente é: ", tipoCliente);

//comparador Ou e E ( || && )

const comparadorOU = 1 > 2 || 2 > 1
console.log(comparadorOU);

const comparadorE = 1 === 1 && 2 !== 2
console.log(comparadorE);

const idade = 18
const resultado = idade >= 18 ?
                          "Pode dirigir" :
                          "Não pode dirigir"
console.log(resultado);
