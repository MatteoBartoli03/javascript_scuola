'use strict'

/* OR || -> vero se almeno una è vera

1)
let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

2)
let var1 = '', var2 = '', var3= 'ciao', var4 = 'hola'
alert( val1 || val 2 || val3 || val4 )

se c'è solo un elemento vero ritorna quell'elemento
se c'è n'è più di uno ritorna il primo elemento vero
se non c'è nessuno ritorna l'ultimo elemento

3)
true || alert("ciao") -> non viene eseguito l'alert
(age < 18) || alert("maggiorenne") -> se age è minore di 18 non viene eseguito l'alert, mentre se è maggiore viene eseguito
*/

/* AND && -> vero se entrambi sono vere

1)
let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30 ) {
  alert( 'The time is 12:30' );
}

2)
result = value1 && value2 && value3 --> result assume il valore del primo falso (i valori vengono convertiti in booleani)
alert(value1 && value2 && value3) --> stampa il primo falso 
        se sono tutti veri in entrambi i casi stampa l'ultimo

3)
(x > 10) && alert("ciao") --> viene stampato solo se x è maggiore di 10
*/

// Se in un'ìoperazione ci sono sia OR che NOT, allora ha la precedenza il Not

/*
! (NOT) -> converte in booleano e ne restituisce l'inverso

!! (DOUBLE NOT) _> converte in booleano
*/


// FINAL TASKS

//1
alert( null || 2 || undefined ) // 2

//2
alert( alert(1), 2, alert(3) ) // prima 1 poi 2

//3
alert( 1 && null && 2 ); // null

//4
alert( alert(1) && alert(2) ); // prima 1 poi undefined

//5
alert( null || 2 && 3 || 4 ); // 3

//6
/*Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.*/
if (age >= 14 && age <= 90)

//7
/*Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.*/

    // 1 solution
if (!(age >= 14 && age <= 90))

    // 2 solution
if (age < 14 || age > 90)


//8
if (-1 || 0) console.log( 'first' ); // first
if (-1 && 0) console.log( 'second' ); // non va
if (null || -1 && 1) console.log( 'third' ); //

//9
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {
    let pass = prompt('Password?', '');
    
    if (pass === 'TheMaster') {
        console.log( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        console.log( 'Canceled' );
    } else {
        console.log( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    console.log( 'Canceled' );
} else {
    console.log( "I don't know you" );
}