
const leia = require ('readline-sync')
    
    const primeiroNumero = leia.questionInt("Digite o primeiro número do intervalo: ");
const ultimoNumero = leia.questionInt("Digite o ultimo número do intervalo: ");

if (primeiroNumero > ultimoNumero) {
    console.log("Intervalo inválido!");
} else {
    console.log(`No Intervalo entre ${primeiroNumero} e ${ultimoNumero}:`);
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}