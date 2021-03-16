/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati*/

// 1 alert  con 5 numeri casuali (no ripetizioni)

// definizione variabili

var numeriCpu = [];
var numeriIndovinati = [];
var numero;
var numeroScelto;

  for (var i = 0; numeriCpu.length < 5; i++){

    numero = Math.floor(Math.random() * (10 - 1)) + 1;

    if( numeriCpu.includes(numero) == false)

    numeriCpu.push(numero);

  }


alert(numeriCpu);

console.log(numeriCpu);



// 2 dopo 30 sec utente inserisce numeri tramite prompt,

setTimeout(function(){

for(var i = 0; i < 5; i++){

  numeroScelto = parseInt(prompt("inserisci i numeri"));

  // 3 il software dice quanti e quali sono stati indovinati

  if (numeriCpu.includes(numeroScelto)){

    numeriIndovinati.push(numeroScelto);

  }

}

alert("Hai indovinato " + numeriIndovinati.length + " numeri e sono i seguenti: " + numeriIndovinati);



}, 3000);
