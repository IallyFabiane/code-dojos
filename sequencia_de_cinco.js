let intNums = [
    [5, 6, 7, 8, 9],
    [6, 5, 7, 8, 9],
    [7, 6, 5, 8, 9],
    [8, 7, 6, 5, 9],
    [9, 8, 7, 6, 5]
];

let prodVertical = intNums[0][4] * intNums[1][4] * intNums[2][4] * intNums[3][4] * intNums[4][4];
console.log(prodVertical);
let prodHorizontal = intNums[0][0] * intNums[0][1] * intNums[0][2] * intNums[0][3] * intNums[0][4];
console.log(prodHorizontal);
let prodDiagonal = intNums[0][4] * intNums[1][3] * intNums[2][2] * intNums[3][1] * intNums[4][0];
console.log(prodDiagonal);