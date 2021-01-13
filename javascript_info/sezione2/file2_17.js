'use strict'

//2.17

// ARROW FUNCTIONS

let sum = (a, b) => a + b;
alert( sum(1, 2) ); // 3

let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");
welcome();

let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

// FINAL TASKS

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

unction ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
}
  
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);