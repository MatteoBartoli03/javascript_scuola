`use strict`

// 1
const nome = prompt(`inserisci il tuo nome: `)
alert(`Ciao ` + nome)

// 2
let age
do {
    age = +prompt(`inserisci la tua eta: `)
}
while (age <= 0 || age > 100)
alert(`Hai ` + age + ` anni`)

if(age < 18) {
    alert(`Sei minorenne`)
} else if (age == 18){
    alert(`Sei appena diventato maggiorenne. \nComplimenti!!`)
} else {
    alert(`Sei maggiorenne`)
}

// 3
let a
do {
    a = prompt(`Coefficiente del termine di secondo grado diverso da zero: `, 1)
}
while (a == 0)

let b = prompt(`Coefficiente del termine di primo grado:`, 1)
let c = prompt(`Coefficiente del termine puro:`, 1)

alert(`(` + a + `)x^2 + (` + b + `)x + (` + c + `) = 0`)
let delta = (b*b) - (4*a*c)
if (delta < 0) {
    alert(`Delta: ` + delta + `\nSoluzioni irrazionali`)
} else if (delta == 0) {
    let x = (-b)/(2*a)
    alert(`Delta: ` + delta + `\nSoluzioni coincidenti \nx1 = x2 = ` + x)
} else {
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)
    alert(`Delta: ` + delta + `\nSoluzioni distinte \nx1 = ` + x1 + `\nx2 = `+ x2)
}

// 4
let n
do {
     n = prompt(`Inserisci un numero (maggiore di zero): `, 5)
}
while (n <= 0)

const array = new Array()
let sum = 0
for (let i = 0; i<n; i++) {
    let val 
    do {
        val = prompt(`Inserisci il valore numero ` + (i+1) , 0)
    } while (val < -50 || val > 50) // Complicazione
    array.push(val)

    sum += +array[i]
}

let max = +array[0]
for (let i = 0; i<n; i++) {
    if (+array[i] > max) {
        max = array[i]
    }
}

let media = sum/n

let sumn = 0
for (let i = 0; i<n; i++) {
    if (array[i] < 0) {
        sumn += +array[i]
    }
}

alert(`Valore massimo: ` + max + `\nMedia: ` + media +`\nSomma negativi: ` + sumn)