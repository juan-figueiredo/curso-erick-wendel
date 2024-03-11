class JogoDaMemoria{
  constructor({ tela }){
    this.tela = tela

    this.heroisIniciais = [
      { img: './assets/batman.png', name: 'Batman'},
      { img: './assets/capitain.png', name: 'Capitão America'},
      { img: './assets/flash.png', name: 'Flash'},
      { img: './assets/spider.png', name: 'Spider'}
    ]
  }
  inicializar(){
    this.tela.atualizarImagens(this.heroisIniciais)
  }
}