'use strict'

//2.16

function sayHi() {
    alert( "Hello" )
}
alert( sayHi ) // shows the function code

function sayHi() {   // (1) create
    alert( "Hello" )
}
let func = sayHi    // (2) copy
func() // Hello     // (3) run the copy (it works)!
sayHi() // Hello    //     this still works too (why wouldn't it)

//callback functions
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}
ask(
    "Do you agree?",
    function() { alert("You agreed.") },
    function() { alert("You canceled the execution.") }
)

let age = prompt("What is your age?", 18)
let welcome
if (age < 18) {
  welcome = function() {
    alert("Hello!")
  }
} else {
  welcome = function() {
    alert("Greetings!")
  }
}
welcome() // ok now