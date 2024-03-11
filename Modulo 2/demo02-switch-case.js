const readline = require("readline");
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const textoMenu = `
Olá, seja bem vindo ao sistema de média
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Ou digite 0 para sair do programa.`

console.log("TextoMenu", textoMenu);

// const opcao = 2

// switch(opcao){
//   case 1:
//     console.log("Pressionou 1");
//     break;
//   case 2:
//       console.log("Pressionou 2");
//       break
//   default:
//       console.log("Opção inválida");
//       break
// }

// terminal.question('Qual é o seu nome?', (msg) => {
//   console.log("Você escreveu", msg);
//   terminal.close()
// })

const questoes = {
  menuInicial:{
    texto:textoMenu,
    fn: menuInicial
  },
  opcao1:{
    texto: "submenu, pressione enter pra selecionar mais opções",
    fn: opcao1
  }
}

function opcao1(msg){
  console.log("Não tem mais opções!");
  terminal.close()
}

function menuInicial(msg){
  const opcao = Number(msg);
  if(isNan(opcao)){
    throw new Error("Opção inválida", msg)
  }
  switch(opcao){
    case 0:
      console.log("saindo...");
      terminal.close()
      break;
      
      case 1:
        console.log("Menu inicial");
        terminal.question(
          questoes.opcao1.texto,
          questoes.opcao1.fn
        )
        break;
        
      default:
        console.log("Opção inválida");
        terminal.close()
        break;

  }
}

terminal.question(
  questoes.menuInicial.texto,
  questoes.menuInicial.fn
)