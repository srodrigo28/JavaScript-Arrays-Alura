// slice para dividir listas
// splice para substituir ou acrescentar
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara']

console.log(`Lista Completa ${listaDeChamada}`)
console.log(`______________________________________________________________________`)

listaDeChamada.splice(1,2,'Rodrigo', 'Fatima', 'Roberto')

console.log(`Lista retirando Elemento possição 1 e 2 que é Ana e Caio`)
console.log(`______________________________________________________________________`)
console.log(`Lista com as substituições ${listaDeChamada} \n`)

console.log(`Adicionando a lista sem remover`)
listaDeChamada.splice(10,0,'Xavier')
console.log(`______________________________________________________________________`)
console.log(`${listaDeChamada}`)

