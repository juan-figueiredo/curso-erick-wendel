let parada = true
let contador = 0

while(parada){
  parada = contador < 10
  if(contador % 2 === 0){
    console.log("Número par", contador);
  }
  contador += 1
}



// Do while porra 

do {
  console.log("Só uma vez! pois a parada é: ", parada);
} while(parada)

while(parada){
  console.log("Nem vai rodar essa budega...");
}