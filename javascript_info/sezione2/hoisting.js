'use strict'

let e = 2

// FUNCTION
logger(e)

function logger(e) {
    console.log(e+1)
}

logger(e)
// si può mettere prima della funzione logger, perchè le funzioni normali sono hoisted

// FUNCTION EXPRESSIONS
// logger2(e) -> darebbe errore 
//               non si può mettere prima della funzione logger2, perchè le function expressions non sono hosted

const logger2 = function(e) {
    console.log(e)
}

logger2(e)