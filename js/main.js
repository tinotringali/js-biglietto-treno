'use strict';

//prompt_1
const kilometers = parseInt(prompt('Inserisci i chilometri da percorre'));
console.log(kilometers);
//prompt_2
const age = parseInt(prompt('Inserisci la tua età'));
console.log(age);

//costo biglietto

let priceToKilometers = 0.21;
let ticketPrice = kilometers * priceToKilometers;
console.log(ticketPrice)
