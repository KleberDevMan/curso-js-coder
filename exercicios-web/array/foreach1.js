const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// A Funcao que voce passa para um forEach recebe 3 parametros (voce usa se quiser)
// (valor, indice, array)
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)