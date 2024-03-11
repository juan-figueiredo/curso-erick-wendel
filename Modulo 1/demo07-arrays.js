const myArray = [
  "Comer",
  "Dormir",
  "Jogar",
  "Treinar"
]
// --------------lenght----------------------

console.log(myArray[0]);
console.log(myArray.length);

// --------------push------------------------

myArray.push('Estudar')
console.log(myArray);

// --------------pop-------------------------

const ultimo = myArray.pop
console.log(ultimo);

// --------------shift-----------------------

myArray.shift
console.log(myArray);

// --------------splice-----------------------

myArray.splice( 2, 1 )
console.log(myArray);

// --------------slice-----------------------

myArray.slice(1, 2)