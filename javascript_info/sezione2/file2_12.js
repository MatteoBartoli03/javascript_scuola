'use strict'

// 2.12

//a ?? b -> ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

let firstName = null
let lastName = null
let nickName = "Supercoder"

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous") // Supercoder

/* || e ??

The important difference between them is that:
|| returns the first truthy value.
?? returns the first defined value. 

?? non si può usare con || o con && ci deve essere una parentesi per esempio.. */

