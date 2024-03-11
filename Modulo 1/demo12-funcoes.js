// _-_-_-_-_-_-_-_-_-_-FUNÇÃO PRA CHAMAR O DIA-_-_-_-_-_-_-_-_-_-_-_-_-//

function queDiaEHoje(){
  const data = new Date;
  console.log(`Hoje é dia: ${data.getDate()}`);
};
queDiaEHoje();

// _-_-_-_-_-_-_-_-_-_-FUNÇÃO PRA SOMAR VALORES-_-_-_-_-_-_-_-_-_-_-_-_-//

function somar(valor1, valor2){
  console.log(`A soma de ${valor1} + ${valor2} é: `, valor1 + valor2);
};
somar(22, 33);
somar(2, 3);

// _-_-_-_-_-_-_-_-_-_-FUNÇÃO PRA RETORNAR VALORES-_-_-_-_-_-_-_-_-_-_-_-//

function retornar(valorX, valorY){
  return valorX + valorY
}
const altura = 180;
const peso = 90;

const resultado = retornar(altura, peso)

console.log("Resultado: ", resultado);

// _-_-_-_-_-_-_-_-_-_-FUNÇÃO PRA MULTIPLICAR VALORES-_-_-_-_-_-_-_-_-_-_-//

function multiplicar(x, y){
  const result =  x * y
  return result
}
console.log(`O resultado da multiplicação é: `, multiplicar(20, 30));

// _-_-_-_-_-_-_-FUNÇÃO PRA CALCURO DE SALÁRIO VALORES-_-_-_-_-_-_-_-_-_-//

const funcionario1 = {
  nome: "Cleitin",
  salarioBruto: 3000,
  desconto: 0.2,
  salarioLiquido: 0
}
const funcionario2 = {
  nome: "Filomena",
  salarioBruto: 2000,
  desconto: 0.1,
  salarioLiquido: 0
}
function calcularDesconto(salarioBruto, desconto){
  return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
  funcionario1.salarioBruto,
  funcionario1.desconto
  )
  
funcionario2.salarioLiquido = calcularDesconto(
  funcionario2.salarioBruto,
  funcionario2.desconto
  )
    
console.log(`
  O salário de ${funcionario1.nome} é: ${funcionario1.salarioLiquido}
  O salário de ${funcionario2.nome} é: ${funcionario2.salarioLiquido}
`);
  
    
    // _-_-_-_-_-_-_-FUNÇÃO PRA CALCURO DE SALÁRIO VALORES-_-_-_-_-_-_-_-_-_-//


const clt1 = {
  nome: "Antonio",
  salarioBruto: 2000,
  desconto: 0.2,
  salarioLiquido: 0
}
const clt2 = {
  nome: "ana",
  salarioBruto: 4000,
  desconto: 0.4,
  salarioLiquido: 0
}

function calcular(salarioBruto, desconto){
  return salarioBruto - (salarioBruto * desconto)
}

clt1.salarioLiquido = calcular(
  clt1.salarioBruto,
  clt1.desconto
  )
  
clt2.salarioLiquido = calcular(
  clt2.salarioBruto,
  clt2.desconto
  )

console.log(`
  O salário de ${clt1.nome} é: ${clt1.salarioLiquido},
  O salário de ${clt2.nome} é: ${clt2.salarioLiquido},
`)
  
