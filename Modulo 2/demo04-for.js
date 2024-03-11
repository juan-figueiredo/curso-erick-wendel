const par = "é par"
const impar = "é impar"

for(let i = 0; i <= 10; i++){
  const decisao = i % 2 === 0 ? par : impar
  console.log(`O número ${i} é: ${decisao}`);
}

const listaDeTarefas = [
  
  { 
    id: parseInt(Math.random() * 50),
    nome: "Zacarias",
    superPoder: "congelante"
  },
  { 
    id: Math.random() * 50,
    nome: "mariazinha",
    superPoder: "força"
  },

]

for (let i = 0; i < listaDeTarefas.length; i++){
  const item = listaDeTarefas[i]
  console.log(
    `
    id: ${item.id}
    nome ${item.nome}
    `);
}
console.log(listaDeTarefas);