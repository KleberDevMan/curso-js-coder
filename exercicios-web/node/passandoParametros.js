// um exemplo de como passar parametros para um modulo.
module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}