
const leiaValor = require ('readline-sync')

let quantidade = leiaValor.questionInt("Digite a quantidade: ");
let produto = "";
let precoUnitario = 0;

switch (true) {
    case produto ==1:
        console.log (`Cachorro Quente || Valor total R$ ${(10* quantidade).toFixed(2)}`);

        break;

    case produto ==2:
        console.log (`X-Salada || Valor total R$ ${(15* quantidade).toFixed(2)}`);

        break;

    case produto == 3:
        console.log (`X-Bacon || Valor total R$ ${(18* quantidade).toFixed(2)}`);

        break;

    case produto ==4:
        console.log (`Bauru || Valor total R$ ${(12* quantidade).toFixed(2)}`);

        break;

    case produto == 5:
        console.log (`Refrigerante || Valor total R$ ${(8* quantidade).toFixed(2)}`);

        break;

    case produto == 6:
        console.log (`Suco de laranja || Valor total R$ ${(13* quantidade).toFixed(2)}`);

        break;

    default:
        console.log("Código de produto inválido.");
        break;
}

const valorTotal = quantidade * precoUnitario;

console.log(`Produto: ${produto}`);
