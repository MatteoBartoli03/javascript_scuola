'use strict'


const stampaVettore = (vettore) => {
  vettore.forEach((elemento, indice) => {//.FOREACH
    console.log(`Voto numero ${indice}: ${elemento}`)
  })
}

const voti = [2, 6, 9, 5, 10]
console.log(`Voti iniziali:`)
stampaVettore(voti)
console.log(``)

const votiNuovi = voti.map((elemento) => {// .MAP
  return ((elemento >= 10) ? 10 : elemento + 1)
  /*if (elemento > 10) {
    return 10
  } else {
    return elemento + 1
  }*/ //+ lungo
})

console.log(`Voti finali:`)
stampaVettore(votiNuovi)
console.log(``)

const votiPari = votiNuovi.filter(e => (e%2 === 0)) //.FILTER
console.log(`Voti pari:`)
stampaVettore(votiPari)
console.log(``)

const sommaVoti = votiNuovi.reduce((accumulatore, e) => { //.REDUCE
  return accumulatore + e
}, 0) //valore iniziale di accumulatore
console.log(`La somma dei voti è: ${sommaVoti}.`)
console.log(``)

const votiOrdinati = votiNuovi.sort((a, b) => a - b) //.SORT
console.log(`Voti ordinati:`)
stampaVettore(votiOrdinati)
console.log(``)

/* ALTERNATIVA PIU SKILLATA
const n = [65, 44, 12, 4]
const aaa = {
  prop: "2"
}
const newarray = n.map(myFunction)

function myFunction(num) {
  return aaa
}
console.log(JSON.stringify(newarray, undefined, 2))*/
