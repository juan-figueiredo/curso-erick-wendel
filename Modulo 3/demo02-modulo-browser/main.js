window.onload = () =>{
  // console.log('A tela carregou!', Matematica.subtrair(10,2));
  const btn = document.getElementById('btnCalcular')
  btn.onclick = click
  function obterValorInput(id){
    const item = document.getElementById(id)
    return item.value
  }
  function click(){
    const tipoOperacao = obterValorInput('tipoOperacao')
    const valor1 = obterValorInput("valor1")
    const valor2 = obterValorInput("valor2")
    // console.log(tipoOperacao, valor1, valor2);
    const resultado = Matematica[tipoOperacao](
      parseInt(valor1) , parseInt(valor2)
    )
    console.log(resultado);
    document.getElementById('resultado').innerText = `A operação de ${tipoOperacao}, ${valor1} por ${valor2} é:  ${resultado}`
  }
}