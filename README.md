### Web Moderno com JavaScript 2020 COMPLETO + Projetos

Para mais informações acessar https://www.cod3r.com.br/courses/web-moderno

### Minhas anotações
VAR, CONST e LET https://www.youtube.com/watch?v=usZ3Y5zdlm0

    tentar não usar o VAR, se usar, manter ele lá na parte de cima do código (pois ele é hosting).
    sempre use CONST.
    se eu precisar usar LET (é que eu vou mudar essa váriavel lá em baixo).

Ternários
    
    Tente usar num1++ (evite ++num1)

Estritamente igual

    via de regra, use o estritamento igual (===)

- igual (valor)
>console.log('01)', '1' == 1) // true
- extritamente igual (tipo e valor)
>console.log('02)', '1' === 1) // false


Contexto de execução

    Broswer
        - windown: grande objeto global (this === windown)
            - evitar criar coisas aqui.

    Node
        - cada arquivo é um modulo diferente (this === module.exports)

#### Funções

Função é vista como dado!

