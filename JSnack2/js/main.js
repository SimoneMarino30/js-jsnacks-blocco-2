// JSnack2
// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Crea due tag div con due id diversi.
// HTML ----->

// Un div avrà il testo colorato di rosso mentre l’altro di verde
// CSS ----->

// Creo un array di numeri
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
// Creo un array vuoto dove conservare i numeri pari o dispari
let oddNumbers = [];
let evenNumbers = [];

for (i = 0; i < numbers.length; i++) {
  // se pari, lo aggiungo all' array vuoto dei numeri pari
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
    // se dispari, lo aggiungo all' array vuoto dei numeri dispari
  } else {
    oddNumbers.push(numbers[i]);
  }
}
// stampiamo nell’id rosso i numeri dispari
document.getElementById("red-text").innerHTML = oddNumbers;
console.log(oddNumbers);
// stampiamo nell’id verde i numeri pari
document.getElementById("green-text").innerHTML = evenNumbers;
console.log(evenNumbers);
