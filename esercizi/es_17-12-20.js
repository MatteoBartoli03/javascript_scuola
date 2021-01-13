'use strict'

/* Dato questo vettore
const stipendi = [500, 1000, 2370, 1140, 1500, 1750, 5000, 1220, 1600]
1) Aumentare tutti i valori del 10% (map)
2) Stampare i valori maggiori di 1000 (foreach)
3) Filtrare i valori maggiori della media (filter)
4) Sommare tutti i valori divisibili per 100 (reduce) */

const stipendi = [500, 1000, 2370, 1140, 1500, 1750, 5000, 1220, 1600]
const stipendiAumentati = stipendi.map(e => e + (e/10) )
const media = (arr) => {
    let sum = 0
    for (let i = 0; i < stipendiAumentati.length; i++) {
        sum += arr[i]
    }
    return (sum / stipendiAumentati.length)
}

console.log(`Il vettore iniziale è: [${stipendi.toString()}]`)
console.log(` `)

console.log(`Il vettore ottenuto aumentando tutti gli elementi del 10% è: [${stipendiAumentati.toString()}]`)
console.log(` `)

console.log(`Stipendi maggiori di 1000 all'interno del vettore aumentato: `)
stipendiAumentati.forEach((e) => {
    if (e >= 1000) {
        console.log(e)
    }
})

console.log(` `)
const stipendiFiltrati = stipendiAumentati.filter(e => e > media(stipendiAumentati))
console.log(`Stipendi maggiori della media del vettore aumentato (cioè ${media(stipendiAumentati)}): `)
for (let i = 0; i < stipendiFiltrati.length; i++) {
    console.log(stipendiFiltrati[i])
}

console.log(` `)
console.log(`Somma di tutti i valori divisibili per 100 del vettore aumentato: `)
console.log(stipendiAumentati.reduce((a, e) => {
    return (e % 100 == 0) ? (a+e) : a
}, 0))