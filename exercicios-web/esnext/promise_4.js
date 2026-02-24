const gerarNumeroAleatorio = (min, max, tempo = 500) => {
    if (min > max) {
        [min, max] = [max, min]
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.random() * (max - min) + min
            resolve(numero)
        }, tempo)
    })
}

// gerarNumeroAleatorio(1, 10, 1000)
//     .then(console.log)
//     .catch(console.log)

const gerarVariosNumeros = () => {
    return Promise.all([
        gerarNumeroAleatorio(1, 60, 4000),
        gerarNumeroAleatorio(1, 60, 2000),
        gerarNumeroAleatorio(1, 60, 3000)
    ])
}

gerarVariosNumeros()
    .then(console.log)
    .catch(console.log)