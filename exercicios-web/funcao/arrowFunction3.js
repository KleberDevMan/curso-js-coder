 let comparaComThis = function (param) {
  console.log(this === param)
}
// Funçao tradicional:
//  objeto global no broswer: window
//  objeto global no Node: global
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


// Agora usando arrow function ----------------------------------

let comparaComThisArrow = param => console.log(this === param)
// Arrow Function:
//  objeto global no broswer: window
//  objeto global no Node: módulo atual (module.exports)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// Tentando mudar a referencia do this de uma arrow function 
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
// Resultado: não muda. Continua apontando para o módulo atual (module.exports)