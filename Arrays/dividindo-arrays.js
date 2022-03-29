const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie','Guilherme','Aline','Fabiana', 'André', 
'Carlos','Paulo','Bia', 'Vivian', 'Isabela', 'Vinicíus', 'Renan','Renata', 'Daisy', 'Camilo', 'Kassandra']
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log('Tamanho da Array:', nomes.length)
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)