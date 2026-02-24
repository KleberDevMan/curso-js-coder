const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

// fs.readFile(caminho, 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

const readFile = (caminho) => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

readFile(caminho)
    .then(console.log)
    .catch(console.log)
