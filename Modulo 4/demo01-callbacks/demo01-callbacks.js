const { log } = require('console')
const fs = require('fs')

// fs.readFile('./arq1.txt', (error, sucess) => {
//   if(error){
//     console.log('Deu ruim..... =[');
//     return
//   }

//   console.log('Sucesso!', sucess.toString());
// })

fs.readFile('./arq1.txt', (errorArq1, sucessArq1) => {
  if(errorArq1){
    console.error('Deu ruim =[ ', errorArq1);
    return;
  }

  fs.readFile('./arq2.txt', (errorArq2, sucessArq2) => {
    if(errorArq2){
    console.error('Deu ruim pt2 =[ ', errorArq2);
    return;
    }

    fs.readFile('./arq3.txt', (errorArq3, sucessArq3) => {
      if(errorArq3){
        console.error('Deu ruim pt3 =[', errorArq3)
        return;
      }

      const conteudo = `${sucessArq1}\n${sucessArq2}\n${sucessArq3}\n`
      fs.writeFile('./final.txt', conteudo, (errorWrite, sucessWrite) => {
        if(errorWrite){
          console.error('Deu ruim pt 999', errorWrite);
          return;
        }

        console.log('Arquivo salvo com sucesso fdp');
      })
      
    })
  })
})