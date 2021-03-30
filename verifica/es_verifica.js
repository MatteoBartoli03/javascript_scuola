lista = [3, 5, 3, 2, 6, 2, 3, , 6, 6, 5, 3, 3, 9, 10]

const risultato = lista.reduce((acc, e, i) => {
    if (!acc[e]) {
        acc[e] = {
            counter: 0,
            index: i
        }
    }
    acc[e].counter ++

    return acc
}, {})

const x = Object.entries(risultato).reduce((acc, [n, { counter, index }]) => { //[n, character] è il destructuring di e
        if (counter > 1) {
            acc.push({n, index})
        }
        return acc
    }, [])

    .sort((a, b) => a.index - b.index)
    .map(({n, index}) => n)


console.log(x)