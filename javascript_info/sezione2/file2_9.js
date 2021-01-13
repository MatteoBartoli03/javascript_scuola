'use strict'

// 2.9

// link to "STRING"
let str = `Good morning`
console.log(str.length) // 
console.log(str.charAt(0)) // G
console.log(str[7]) // r
console.log(str.charAt(str.length-1)) // g
// strings are immutable

/*
==	equal to

x == 8	false
x == 5	true
x == "5"	true

===	equal value and equal type
x === 5	    true
x === "5"	false

!=	not equal
x != 8	true	

!==	not equal value or not equal type
x !== 5	    false
x !== "5"	true
x !== 8	    true

>	greater than
x > 8   false

<	less than
x < 8   true

>=	greater than or equal to
x >= 8	false

<=	less than or equal to
x <= 8	true
*/

// FINAL TASKS
console.log (5 > 4) // true
console.log("apple" > "pineapple") // false 
console.log("2" > "12") // false
console.log(undefined == null) // true --> convertiti in booleani stesso valore
console.log(undefined === null) // false --> diverso tipo, il primo undefined, il secondo object
console.log(null == "\n0\n") // false
console.log(null === +"\n0\n") // false
