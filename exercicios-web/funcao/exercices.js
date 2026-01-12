// challenge 1
math = (a, b) => {
  return [a+b, a-b, a*b, a/b]
}
console.log(math(5, 2))

// challenge 2
defineTriangle = (side1, side2, side3) => {
  const result = new Set([side1, side2, side3])
  switch (result.size) {
    case 1:
      return 'Equilátero'
    case 2:
      return 'Isósceles'
    case 3:
      return 'Escaleno'
    case 4:
      return 'Other'
  }
}
console.log(defineTriangle(2,2,2))

// challenge 3
exponentiate = (a, b) => {
  return a ** b
}
console.log(exponentiate(2,3))

// challenge 4
remainder = (a, b) => {
  return [a / b, a % b]
}
console.log(remainder(5,2))

// challenge 5
formatDecimal = (a) => {
  return `R$${a.toFixed(2).replace('.', ',')}`
}
console.log(formatDecimal(0.1 + 0.2))

// challenge 6
simpleInterest = (principal, interest, time) => {
  return ((principal * interest * time) + principal).toFixed(2)
}
console.log(simpleInterest(1000, 0.02, 5))
compoundInterest = (principal, interest, time) => {
  return (principal * ((1 + interest) ** time)).toFixed(2)
}
console.log(compoundInterest(1000, 0.02, 5))

// challenge 7
