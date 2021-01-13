'use strict'

//2.13

//WHILE
let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    alert( i );
  i--;
}

i=3
while (i) alert(i--);


//DO WHILE
i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

//FOR
for (let c = 0; c < 3; c++) {
    alert(c)
}
// se c viene inizializzato dentro al for, questa variabile fuori dal for è come se non esistesse, e per usarla bisognerebbe reinizializzarla
// mentre se c viene utilizzato fuori può essere usato anche dentro

// for (;;) repeats without limits

// break -> interrompe il loop ed esce dal for
// continue -> si passa direttamente alla successiva iterazione, cioè non vengono più eseguite le indicazioni e si aumenta l'indice di 1
/*
label: for () {
  for () {
    break label
  }
}
in questo modo ho creato una label, un'etichetta che indica il ciclo for esterno, + grande
e attraverso il comando  break label  esco da label quindi dal ciclo for esterno, interrompendoli entrambi.
*/


//FINAL TASKS

//1
let x = 3;
while (x) {
  alert( x-- );
}
// the last value is 1

//2
i = 0;
while (++i < 5) alert( i ); //outputs 1, 2, 3, 4
i = 0;
while (i++ < 5) alert( i ); //outputs 1, 2, 3, 4, 5

//3
for (i = 0; i < 5; i++) alert( i ) // outputs 0, 1, 2, 3, 4
for (i = 0; i < 5; ++i) alert( i ) // outputs 0, 1, 2, 3, 4

//4
// even numbers from 2 to 10
for (i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i)
  }
}

//5
//replace "for" with a "while"
for (i = 0; i < 3; i++) {
  alert( `number ${i}!` )
}

i = 0
while (i != 3) {
  alert( `number ${i++}!` )
}


//6
/* Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.*/
let num;
do {
  num = prompt("inserisci un numero maggiore di 100", 0)
} while (num <= 100 && num) //(x essere falsa, una delle due dev'essere falsa, cioè o num dev'essere maggiore di 100 oppure num nè null)


//7
//Write the code which outputs prime numbers in the interval from 2 to n.

let n = prompt("inserisci n", 10)

prime :
for ( i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue prime; // not a prime, go next i
  }
  alert( i );
}