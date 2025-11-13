const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// O bind() a gente passa o objeto que vai resolver o this que 
//  porventura a função estiver usando.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()