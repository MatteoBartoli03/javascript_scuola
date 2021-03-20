lista = [3, 5, 3, 2, 6, 2, 3, 6, 6, 5, 3, 3, 9, 10]
let risultato = []
let x, c
let a

for (x = 0; x< lista.length; x++) {
    a = lista.reduce((acc, e, i, arr) => {
        if (e == lista[x]) {
            acc++
            if (i != x) {
                lista[i] = 0
            }
        }
        return acc
    }, 0)
    risultato.push([lista[x], a])
}

const r = []
for (c = 0; c < risultato.length; c++) {
    if (risultato[c][0] != 0) {
        if (risultato[c][1] != 1) {
            r.push(risultato[c][0])
        }
    }
}

console.log(r)