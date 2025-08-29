
const leia = require ('readline-sync')

    const matriz = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];
    
    let diagonalPrincipal = [];
    let diagonalSecundaria = [];
    let somaPrincipal = 0;
    let somaSecundaria = 0;
    

    for (let i = 0; i < 3; i++) {
        diagonalPrincipal.push(matriz[i][i]);
        somaPrincipal += matriz[i][i];
    }
    

    for (let i = 0; i < 3; i++) {
        diagonalSecundaria.push(matriz[i][2 - i]);
        somaSecundaria += matriz[i][2 - i];
    }
    
    console.log("Elementos da Diagonal Principal:", diagonalPrincipal.join(", "));
    console.log("Elementos da Diagonal Secundária:", diagonalSecundaria.join(", "));
    console.log("Soma da Diagonal Principal:", somaPrincipal);
    console.log("Soma da Diagonal Secundária:", somaSecundaria);

