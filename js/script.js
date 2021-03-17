/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati*/

// 1 alert  con 5 numeri casuali (no ripetizioni)

// definizione variabili

var numeriCpu = [];
var numeriIndovinati = [];
var numeriUtente = [];
var numero;
var numeroScelto;


// funzioni

function generaNumeri (min, max){


  var numeriCasuali = [];

  for (var i = 0; numeriCasuali.length < 5; i++){

    var numeroCasuale = Math.floor(Math.random() * (max - min)) + min;

    if( numeriCasuali.includes(numeroCasuale) == false)

    numeriCasuali.push(numeroCasuale);

  }

  return numeriCasuali;
}

// funzioni




numeriCpu = generaNumeri(1, 100);

console.log(numeriCpu);

alert("Memorizza i seguenti numeri: " + numeriCpu);




// 2 dopo 30 sec utente inserisce numeri tramite prompt,

setTimeout(function(){

while ( numeriUtente.length < 5){

  numeroScelto = parseInt(prompt("inserisci i numeri"));

  if(numeriUtente.includes(numeroScelto)){

    alert("Non puoi inserire lo stesso numero");
  } else if (isNaN(numeroScelto)){

    alert("Devi inserire solo numeri");

  } else if ( numeroScelto > 100 || numeroScelto < 1){

    alert("Il numero deve essere compreso tra 1 e 100");

  } else{

    numeriUtente.push(numeroScelto);
  }

}



for(var i = 0; i < 5; i++){


  // 3 il software dice quanti e quali sono stati indovinati

  if (numeriCpu.includes(numeriUtente[i])){

    numeriIndovinati.push(numeriUtente[i]);

  }
}
console.log(numeriIndovinati);
alert("Hai indovinato " + numeriIndovinati.length + " numeri e sono i seguenti: " + numeriIndovinati);



}, 3000);
