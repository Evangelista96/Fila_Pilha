import { Stack } from '../Stack';
import * as leia from 'readline-sync';
// Solução para o readline-sync


    const pilha = new Stack <string> ()
    
    let continuar: boolean = true
    let opcao: number;
    

do { 



    console.log("\n********************************************");
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("********************************************");
    
    opcao = parseInt(leia.question("Entre com a opção desejada: "));
    switch (opcao) {
        case 1:
            const nome = leia.question("Digite o nome: ");
            pilha.push(nome);
            console.log("Livro adicionado!");
            break;
            
        case 2:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                console.log("\nLista de Livros na Pilha:");
            }
            break;
            
        case 3:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                const livroRetirado = pilha.pop();
                console.log("O Livro " + livroRetirado + " foi retirado da pilha!");
            }
            break;
            
        case 0:
            console.log("\nPrograma Finalizado!");
            break;
            
        default:
            console.log("\nOpção inválida! Tente novamente.");
    }
} while (opcao !== 0)


