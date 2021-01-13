'use script';

// 2.4

var message = 'heiii'; // “old-school” way

let text = 'ciao';

/* or
let text;
text = 'ciao';
*/

text = 'AHAHAHAH'; // change the value
alert( text );


let name1 = 'John', age = '23', city = 'New York';

let first, 
  second = 'John', 
  third = 'Luke';

first = name1;
[ first, second, third ].forEach( alert )

name1 = "Paul";
[ name1, first ].forEach( alert )

const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; // error, can't reassign the constant!
alert( myBirthday );


// FINAL TASKS
//1
let admin, name;
name = "John";
admin = name;
alert( admin ); // "John"

//2
let planetName = "Jupiter";
let currentUserName = "Luke";