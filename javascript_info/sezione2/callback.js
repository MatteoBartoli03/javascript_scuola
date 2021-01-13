'use strict'


// function
let arr = [1, 2, 3, 4]

function logger(e) {
    console.log(e+1)
}

arr.forEach(logger) // si può mettere prima della funzione logger, perchè le funzioni normali sono hoisted

// function expressions
let arr2 = [1, 2, 3, 4]

const logger2 = function(e) {
    console.log(e+1)
}

arr2.forEach(logger2) // non si può mettere prima della funzione logger2, perchè le function expressions non sono hosted


// MYFOREACH
console.log("jnosdc")
const myForEach = function(arr, callback) {
    for (let i=0; i<arr.length; i++) {
        callback(arr[i])
    }
}
myForEach(arr, logger)