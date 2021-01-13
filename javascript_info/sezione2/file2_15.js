'use strict'

//2.15

//FUNCTIONS
function showMessage() {
    let message = `Hellooo!`
    console.log( message );
}
showMessage();
showMessage();
//alert(message) -> error because variables are local to the function

let userName = 'John';
function showText() {
  userName = "Bob"; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showText();
alert( userName ); // Bob, the value was modified by the function

// ma se dentro alla funzione io creo un'altra variabile userName interna alla funzione questa non modificherà
//la variabile userName esterna alla funzione, perchè la prima ha come scope l'interno della funzione, mentre la seconda
//siccome viene inizializzata all'esterno della funzione ha scope globale (però siccome all'interno della funzione viene 
//inizializzata un'altra variabile con lo stesso nome, quella inizialmente globale avrà scope limitato all'esterno della funzione)

// In generale però una variabile che viene inizializzata all'esterno della funzione viene definita globale, ed è quindi visibile,
//quindi utilizzabile sia all'interno che all'esterno delle funzioni.


//PARAMETERS
function showMessage(from, text = "no text given") { // default value
    from = '*' + from + '*'; // make "from" look nicer
    alert( from + ': ' + text );
}

let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

// se si mette function showMessage(from, text = AnotherFunction()), se non viene specificato text, quando si chiama la funzionr
//viene eseguita la funzione AnotherFunction()

// can return a value
function name() {
  let input = prompt("come ti chiami?", "")
  return input
}
let name = name()

/*
"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
*/

//FINAL TASKS

//3
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//4
function pow(x, n) {
  let result = x;
  for (let C = 1; C < n; C++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert(`C'è qualcosa che non va`);
} else {
  alert( pow(x, n) );
}