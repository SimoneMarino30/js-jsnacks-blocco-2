// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let moreNumbers = [2, 5, 8, 55, 65, 84, 87, 98, 36, 74, 51, 33, 30];
console.log(moreNumbers.length);
let lessNumbers = [25, 55, 38, 55, 15];
console.log(lessNumbers.length);

for (i = 0; i <= moreNumbers.length; i++) {
  if (moreNumbers.length > lessNumbers.length) {
    lessNumbers.push(moreNumbers[i]);
  }
}

console.log(moreNumbers.length);
console.log(lessNumbers.length);
