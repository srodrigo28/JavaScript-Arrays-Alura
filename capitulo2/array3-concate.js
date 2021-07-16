const salaPython = ['Melissa', 'Helena', 'Jonh Artur']
const salaJavaScript = ['Ju', 'Leo', 'Raquel']

console.log('Trabalhando com concat() para concatenar arrays')
console.log('__________________________________________________')
console.log(`Sala Python: ${salaPython}`)
console.log('__________________________________________________')
console.log(`Sala JavaScript: ${salaJavaScript}`)
const salaUnificadas = salaPython.concat(salaJavaScript);
console.log('__________________________________________________')
console.log(`Total de Alunos: ${salaUnificadas.length} \n Lista completa: ${salaUnificadas}`)
