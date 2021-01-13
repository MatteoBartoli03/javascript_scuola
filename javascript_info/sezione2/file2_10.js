'use strict'

// 2.10

let age = prompt(`What's your age?`, `?`)

let message = (age < 5) ? `neonato` :
    (age < 18) ? `non hai ancora la patente` :
    (age < 100) ? `okay` :
    `addirittura` 

/* oppure 
let message;
if (age < 5)  {
    message = `neonato`
} else if (age < 18) {
    message = `non hai ancora la patente`
} else if (age < 100){
    message = `okay`
} else {
    message = `addirittura`
}
*/

// se la condizione è (0), (false) -> quella parte di codice non verrà mai eseguita

alert(message)


//FINAL TASKS

//1
// Will alert be shown?

if ("0") {
    alert( 'Hello' );
}
// Yes, because "0" is not 0


//2
/* Using if..else, write the code which gets a number via prompt and then shows in alert:
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number */

let num = prompt(`a number: `, `?`)
if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}

//3
/* Rewrite this if using the conditional operator '?':
let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

let result = ( a + b + 4 ) ? `Below` : `Over`

//4
/* Rewrite if..else using multiple ternary operators '?'.
For readability, it’s recommended to split the code into multiple lines.

let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

let messaggio = (login == "Employee") ? `hello` :
    (login == 'Director') ? `Greetings` :
    (login == '') ? `No login` :
    ``