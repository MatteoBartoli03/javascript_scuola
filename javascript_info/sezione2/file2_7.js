'use strict';

// 2.7

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string 'true'
alert(typeof value); // string

let str = '123';
alert(typeof str); // string

let num = Number(str); // becomes a number 123
alert(typeof num); // number

let age = Number('an arbitrary string instead of a number');
alert( age ); // NaN, conversion failed

/*
conversions to string

undefined	NaN
null	0
true and false	1 and 0
string	Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

conversions to number

undefined	NaN
null	0
true / false	1 / 0
string	The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN. (Number("123z")      // NaN (error reading a number at "z"))

conversions to bulean

0, null, undefined, NaN, ""	false
any other value	            true
*/