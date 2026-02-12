// middleware pattern (chain of responsibility = cadeia de responsabilidades)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

// O "loop" ocorre recursivamente dentro da função execPasso. Cada middleware chama next(), 
// que é na verdade () => execPasso(indice + 1), avançando para o próximo middleware. 
// Assim, a iteração é feita por recursão, não por um laço explícito.
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)