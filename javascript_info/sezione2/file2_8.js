'use strict';

// 2.8

/*
operators
Assignment =
Addition +
Subtraction -
Multiplication *
Division /
Remainder %
Exponentiation **

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 8 % 3 ); // 2, a remainder of 8 divided by 3
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 times)
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings

// UNARY +
// No effects on numbers
let x = 1;
alert( +x ); // 1

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples2 = "2";
let oranges2 = "3";
alert( apples2 + oranges2 ); // "23", the binary plus concatenates strings
alert( +apples2 + +oranges2 ); // 5 both values converted to numbers before the binary plus
/*
the longer variant
alert( Number(apples) + Number(oranges) ); // 5
*/

// ASSIGNEMENT =
let a, b = 2, c;
// (a = b + 1) -> a = 3
 c = 3 - (a = b + 1);
allert(a); // 3
allert(c); // 0 -> 3-3=0

let e, f, g;
e = f = g = 2 + 2;
alert( e ); // 4
alert( f ); // 4
alert( g );// 4

// MODIFY-IN-PLACE
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
alert( n ); // 14

let m = 2;
m *= 3 + 5;
alert( m ); // 16  (right part evaluated first, same as n *= 8)

// INCREMENT AND DECREMENT
let counter = 0;
counter++; // counter += 1
counter--; // counter -= 1
// 5++ -> error
++counter; // counter += 1

let counter2 = 0;
alert( ++counter2 ); // 1

let counter3 = 0;
alert( counter3++ ); // 0

let counter4 = 1;
alert( 2 * ++counter4 ); // 4

let counter5 = 1;
alert( 2 * counter5++ ); // 2, because counter++ returns the "old" value


//COMMA
let k = (1 + 2, 3 + 4);
alert( k ); // 7 (the result of 3 + 4)


// FINAL TASKS
//1
let var1 = 1, var2 = 1;

let var3 = ++var1; // 2
let var4 = var2++; // 2

//2
let i = 1 + (var4 *= 2); // var4 = 4 and i = 5

//3
let input1 = prompt("First number?", 1);
let input2 = prompt("Second number?", 2);
alert(input1 + input2); // 12
alert(+input1 + +input2); // 3 