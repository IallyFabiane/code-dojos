//Resolução do desafio Sequência de Cinco do DojoPuzzles:
//intNums é uma matriz quadrada (contém o mesmo número de linhas e colunas) e portanto, só tem duas diagonais (A principal e a secundária);
//Diagonais de intNums: 
//Diagonal Principal (intNums[0][0] = 5, intNums[1][1] = 5,  intNums[2][2] = 5,  intNums[3][3] = 5,  intNums[4][4] = 5);
//Diagonal Secundária (intNums[0][4] = 9, intNums[1][3] = 8,  intNums[2][2] = 5,  intNums[3][1] = 7,  intNums[4][0] = 9);


let intNums = [
    [5, 6, 7, 8, 9],
    [6, 5, 7, 8, 9],
    [7, 6, 5, 8, 9],
    [8, 7, 6, 5, 9],
    [9, 8, 7, 6, 5]
];

let maiorProdutoVertical = intNums[0][4] * intNums[1][4] * intNums[2][4] * intNums[3][4] * intNums[4][4];
console.log(maiorProdutoVertical);
let maiorProdutoHorizontal = intNums[0][0] * intNums[0][1] * intNums[0][2] * intNums[0][3] * intNums[0][4];
console.log(maiorProdutoHorizontal);
let maiorProdutoDiagonal = intNums[0][4] * intNums[1][3] * intNums[2][2] * intNums[3][1] * intNums[4][0];
console.log(maiorProdutoDiagonal);