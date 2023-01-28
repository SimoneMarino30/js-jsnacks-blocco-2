// JSnack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const numbers = [10, 21, 33, 42, 55];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    sum = sum + numbers[i];
  }
}

console.log(sum);
