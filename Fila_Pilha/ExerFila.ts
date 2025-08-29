// código da fila aqui
import { Queue } from '../Queue';
import * as leia from 'readline-sync';

const fila = new Queue <string> ()

let continuar: boolean = true
let opcao: number;

do{

console.log("********************************************************************");
console.log("");
console.log("1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
console.log("0 - Sair");
console.log("");
console.log("**********************************************");
console.log("");
console.log("Entre com a opção desejada:");

opcao = parseInt(leia.question());

 switch (opcao) {
        case 1:
          let nome: string = leia.question("Digite o nome do Cliente: ");
          fila.enqueue(nome);
          console.log("-----------------------")
          console.log("Pessoa na fila");
          fila.printQueue();
          break

        case 2:
          console.log("Listando todos os clientes da fila: ");
          break
        
        case 3:
          console.log("Chamar o próximo da fila: ");
          break

        case 0:
          console.log("Saindo...");
          continuar = false;
          break

        default:
          console.log("Opção Inválida!");


    }


} while(opcao !== 0);
