// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

// IIFE - Immediately Invoked Function Expression
// para executar a função imediatamente
// (async () => {
//     const alunos = await obterAlunos()
//     const nomes = alunos.map(a => a.nome)
//     console.log(nomes)

//     getTurma('D').catch(e => console.log(e.message))
// })()

// ou o inverso
(async () => {
    try {
        resultado = await getTurma('D')
        console.log(resultado)
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log('Fim getTurma !')
    }

    const alunos = await obterAlunos()
    const nomes = alunos.map(a => a.nome)
    console.log(nomes)
})()