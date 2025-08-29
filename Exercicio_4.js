const readline = ('readline-sync')


let par, Impar;

let numero = questionInt("Digite um número: ");

if (numero % 2 === 0) {
    parOuImpar = "par";
} else {
    parOuImpar = "ímpar";
}

let posOuNeg;
if (numero >= 0) {
    posOuNeg = "positivo";
} else {
    posOuNeg = "negativo";
}

console.log(`O Número ${numero} é ${parOuImpar} e ${posOuNeg}!`);