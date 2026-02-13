const schedule = require('node-schedule')

// a cada 5 segundos
const tarefa1 = schedule.scheduleJob('*/1 * * * * *', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 10000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.second = new schedule.Range(0, 59, 5)

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa2.cancel()
    console.log('Cancelando Tarefa 2!')
}, 20000)