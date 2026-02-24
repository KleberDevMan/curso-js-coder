// setTimeout(() => {
//     console.log('Primeiro nível...')
//     setTimeout(() => {
//         console.log('Segundo nível...')
//         setTimeout(() => {
//             console.log('Terceiro nível...')
//         }, 1000)
//     }, 1000)
// }, 1000)

const esperarPor = (tempo = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Esperando ${tempo}ms...`)
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)
