import * as leia from 'readline-sync'

// Criar um Set vazio 
const numeros: Set<number> = new Set<number>();

// Solicitar 10 números ao usuário
for (let i = 0; i < 10; i++) {
    let numero = readline.questionInt(`Digite o ${i + 1}º número inteiro: `);
    numeros.add(numero); 

let numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);

console.log("Listar dados do Set:");
console.log(numerosOrdenados);
}
