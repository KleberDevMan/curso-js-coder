function receberPrimeiroEUltimoElemento(array) {
  console.log([array[0], array[array.length -1]])
}
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

function filtrarNumeros(array) {
  const isNumber = value => typeof value === 'number' && Number.isFinite(value)
  console.log(array.filter(isNumber))
}
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []

function objetoParaArray(ob) {
  result = []
  values = Object.values(ob)
  keys = Object.keys(ob)
  lenght = values.length
  for (let i = 0; i < lenght; i++) {
    result.push([keys[i], values[i]])
  }
  console.log(result)
}
objetoParaArray({ nome: "Maria",
  profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray({ codigo: 11111,
  preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]
