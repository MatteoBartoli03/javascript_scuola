'use strict';

// 2.5

/*
8 data types:
number for both floating-point and integer numbers,
bigint for integer numbers of arbitrary length,
string for strings,
boolean for logical values: true/false,
null – a type with a single value null, meaning “empty” or “does not exist”,
undefined – a type with a single value undefined, meaning “not assigned”,
object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.
*/


alert( Infinity ); // Infinity
alert( 1 / 0 ); // Infinity
alert( 'a' / 2 ); // NaN -> not a number
alert( '2' / 2 ); // 1 -> mystery of javascript

const BigInt = 1234567890123456789012345678901234567890n;
alert( BigInt );

let name = "John";
alert( `Hello, ${`name`}!` ); //Hello, name!
alert( `Hello, ${name}!` ); // Hello, John!
// `... ` are required

alert( `the result is ${1 + 2}` ); // the result is 3
// ` ... ` not reuired
// also ' ... ' or " ... "

// boolean
let truth = true;
let lie = false;

let isBigger = 4 < 1;
alert( isBigger ); // false

// null
let age = null;
alert(age); // null

// undefined
let city = undefined;
alert(city); // undefined

let world;
alert(world); // undefined

// THE TYPEOF OPERATOR
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


// FINAL TASKS

let name = "Ilya";

alert( `hello ${1}` ); // ? -> hello 1

alert( `hello ${"name"}` ); // ? -> hello name 

alert( `hello ${name}` ); // ? -> hello Ilya