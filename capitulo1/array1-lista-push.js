const lista = ['aline', 'clara', 'joão']
console.log(`lista com alunos ${lista}`)
console.log('_________________________________________')

lista.push('adriano')
console.log(`lista com alunos ${lista}`)

console.log('_________________________________________')
console.log('Calculando média de um array')
const notas = [7, 8, 10]
const soma = ( notas[0] + notas[1] + notas[2] / notas.length )
console.log(`Soma das notas: ${soma.toFixed(2)}`)
console.log(`Soma das notas: ${Number(soma)}`)