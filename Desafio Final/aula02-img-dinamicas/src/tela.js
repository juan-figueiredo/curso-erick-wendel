const ID_CONTEUDO = "conteudo"

class Tela{
  static obterCodigoHtml(item){
    return`
    <div class="col-md-3">
      <div class="card" style="width: 50%;">
        <img src="${item.img}" name="${item.nome}"class="card-img-top">
      </div>
      <br />
    </div>
    `
  }

  static alterarConteudoHTML(codigoHtml){
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHtml
  }
  static gerarStringPelaImagem(itens){

    return itens.map(Tela.obterCodigoHtml).join('')
  }
  static atualizarImagens(itens){
    const codigoHtml = Tela.gerarStringPelaImagem(itens)
    Tela.alterarConteudoHTML(codigoHtml)
  }
}