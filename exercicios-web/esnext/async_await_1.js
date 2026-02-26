function esperarPor(segundos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, segundos * 1000)
    })
}

// esperarPor(1).then(() => {
//     console.log('1 segundo passado')
//     return esperarPor(1)
// }).then(() => {
//     console.log('2 segundos passados')
//     return esperarPor(1)
// }).then(() => {
//     console.log('3 segundos passados')
// })

async function retornarValor() {
    return 10
}

async function teste() {
    const valor = await retornarValor()
    console.log('1 segundo passado e o valor é', valor)
    await esperarPor(1)
    console.log('2 segundos passados e o valor é', valor + 1)
    await esperarPor(1)
    console.log('3 segundos passados e o valor é', valor + 2)

    return valor + 3
}

teste().then(valor => {
    console.log('O valor final é', valor)
})