class Heroi {
  atacar(){
    console.log(`Atacou!`);
  }
  defender(){
    console.log(`Defendeu!`);
  }
}

const heroi = new Heroi();
heroi.atacar()
heroi.defender()

// Usando constructor

class Heroi2{
  constructor(nome, idade){
    this.nome = nome
    this.idade = idade
  }
  
  atacar(){
    console.log(`O ${this.nome} atacou!`);
  }
}

const heroi2 = new Heroi2(`Flash`, 80)

heroi2.atacar()

//usando static

class Heroi3 {
  static obterAnoDeNascimento(idade){
    return 2024 - idade
  }
}

const anoDeNascimento = Heroi3.obterAnoDeNascimento(26)
console.log(`O ano de nascimento do Heroi é ${anoDeNascimento}`);