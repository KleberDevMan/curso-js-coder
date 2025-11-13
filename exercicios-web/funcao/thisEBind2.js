function Pessoa() {
  this.idade = 0

  // Constante usada para driblar o fato
  //      de o this ficar mudando.
  const self = this

  // Chama uma função a cada
  //      x milisegundos.
  setInterval(function () {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000)
}

new Pessoa