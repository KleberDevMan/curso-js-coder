const funcionaOuNao = (valor, chanceDeErro = 0.1) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceDeErro) {
            reject('Erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionaOuNao(1, 0.9)
    .then(console.log)
    .catch(console.log)
