function teste1(num) {
  // if sem {} --> executa apenas uma linha de código
  if (num > 7)
    console.log(num)

  console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
  // aqui o ponto e vírgula significa uma instrução vazia.
  if (num > 7) ;

  { // cuidado com o ';', não usar com as estruturas de controle
    console.log(num)
  }
}

teste2(6)
teste2(8)