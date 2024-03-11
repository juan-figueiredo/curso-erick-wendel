const pessoa = {
  _nome : "Juan",
  idade : 26,
  get nome(){
    return this._nome
  },
  set nome(valor){
    this._nome = valor.toUpperCase()
  }
}

pessoa.nome = "Juan Figueiredo"
pessoa.idade = 26.4
console.log(pessoa.nome)
console.log(pessoa.idade)

// ____________________________________________

const hero = {
  _name: "",
  _age: 150,
  _color: "",

  get name (){
    return this._name
  },
  
  set name(value){
    this._name = value
  }
}

hero.name = "Flash"
hero.color = "Red"

console.log(hero.name, hero.color);




// _______________________________________________


const fruits = {
  _bananaColor: "",
  _strawberryColor: "",

  get bananaColor(){
    return this._bananaColor
  },
  get strawberryColor(){
    return this._strawberryColor
  },
  set bananaColor(value){
    this._bananaColor = value
  },
  set strawberryColor(value){
    this._strawberryColor = value
  }
}

fruits.bananaColor = "Yellow"
fruits.strawberryColor = "Red"

console.log(fruits.bananaColor);
console.log(fruits.strawberryColor);

