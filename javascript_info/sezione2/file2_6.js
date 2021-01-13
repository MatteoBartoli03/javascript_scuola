'use strict';

// 2.6

alert("Luca"); // it shows a modal window with a text message.

/*
a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
the first parameter is the text of the window.
the second parameter is optional, the inital value for input field.
If you cancel the input or press Cancel, the valor of age is null.
*/
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`);

/*
It shows a modal window with a question and two buttons: OK and Cancel.
The result is true if OK is pressed and false otherwise.
*/
let isBoss = confirm("Are you the boss?");
alert( isBoss );


// FINAL TASK

let name = prompt("What's your name?", "NESSUNO");
alert(name);