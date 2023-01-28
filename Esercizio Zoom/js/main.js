// Dato un array contenente i risultati di una squadra(vittorie, pareggi e sconfitte)[W, W, L, X, X, W, L, X],
// stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

let results = ["W", "W", "L", "X", "X", "W", "L", "X"];

const win = "W";
let numbersOfWin = 0;
const lose = "L";
let numbersOfLose = 0;
const draw = "X";
let numbersOfDraw = 0;

for (i = 0; i < results.length; i++) {
  if (results[i] == win) {
    numbersOfWin++;
  } else if (results[i] == lose) {
    numbersOfLose++;
  } else {
    numbersOfDraw++;
  }
}

document.getElementById("win").innerHTML = `You won ${numbersOfWin} times`;
document.getElementById("lose").innerHTML = `You won ${numbersOfLose} times`;
document.getElementById("draw").innerHTML = `You won ${numbersOfDraw} times`;

console.log(numbersOfWin);
console.log(numbersOfLose);
console.log(numbersOfDraw);
