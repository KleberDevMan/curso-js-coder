function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max)  [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const numero = Math.floor(Math.random() * fator) + min
        if (numerosProibidos.includes(numero)) {
            reject('Número proibido')
        } else {
            resolve(numero)
        }
    })
}

// async function teste() {
//     const numero = await gerarNumeroEntre(1, 5, [2, 3, 4])
//     console.log(numero)
// }

// teste().catch(console.log)

// gerarNumeroEntre(1, 5, [2, 3, 4]).then(console.log).catch(console.log)

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let i = 0; i < qtdNumeros; i++) {
            numeros.push(await gerarNumeroEntre(1, 30, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 5) {
            throw "Não foi possível gerar os números"
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(10).then(console.log).catch(console.log)