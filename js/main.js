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


//variabili sconto in base all'età dell'utente

if(age < 18){
    ticketPrice = ticketPrice - (ticketPrice * 20 / 100);
} 
else if(age > 65){
    ticketPrice = ticketPrice - (ticketPrice * 40 / 100);
}
console.log(ticketPrice, 'prezzo con sconto')

//dati inserti sul file HTML

document.getElementById('kilometers').innerHTML = kilometers;
document.getElementById('age').innerHTML = age;
document.getElementById('ticketPrice').innerHTML = ticketPrice.toFixed(2);