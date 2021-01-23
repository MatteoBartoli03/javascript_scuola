`use strict`

// 1
/*
const val_interno = (A, B) => {
    let x

    do{
        x = prompt(`Inserisci un valore compreso tra ` + A + ` e ` + B, 5)
    } while ((x < A) || (x > B))

    alert("il valore da te inserito e " + x)
}

val_interno(0, 10)


//2
const delta = (a, b, c) => {
    let d = ((b*b) - (4*a*c))
    return d
}

const sol = (a, b, c, d) => {
    if (d < 0) {
        alert(`Delta: ` + d + `\nSoluzioni irrazionali`)
    } else {
        let x1 = (-b + Math.sqrt(d))/(2*a)
        let x2 = (-b - Math.sqrt(d))/(2*a)
        if (delta == 0) {
            alert(`Delta: ` + d + `\nSoluzioni coincidenti \nx1 = ` + x1 + `\nx2 = `+ x2)
        }
        else {
            alert(`Delta: ` + d + `\nSoluzioni distinte \nx1 = ` + x1 + `\nx2 = `+ x2)
        }
    }

}


let a
do {
    a = prompt(`Coefficiente del termine di secondo grado diverso da zero: `, 1)
}
while (a == 0)
let b = prompt(`Coefficiente del termine di primo grado:`, 1)
let c = prompt(`Coefficiente del termine puro:`, 1)
alert(`(` + a + `)x^2 + (` + b + `)x + (` + c + `) = 0`)

const d = delta(a, b, c)
sol(a, b, c, d)
*/
//3
const array = new Array()

const aa = prompt("inserisci un valore A")
array.push(aa)
const bb = prompt("inserisci un valore B")
array.push(bb)
const k = prompt("inserisci un valore K")
array.push(k)

let min = array[0], max = array[0]

for (let i= 0; i<3 ; i++) {
    if(array[i] < min){
        min = array[i]
    }
    if(array[i] > max){
        max = array[i]
    }
}
sum = +array[0] + +array[1]
alert("il valore minore e " + min)
alert("il valore maggiore e " + max)
alert("la somma di A e B e " + sum)