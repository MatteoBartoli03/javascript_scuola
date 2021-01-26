`use strict`
const fs = require("fs")
let t1, t2, t3

fs.readFile(`text1.txt`, (err, data) => {
    if (err) {
        throw err
    }
    t1 = data.toString()
    fs.readFile(`text2.txt`, read2)
})

const read2 = (err, data) => {
    if (err) {
        throw err
    }
    t2 = data.toString()
    fs.readFile(`text3.txt`, read3)
}

const read3 = (err, data) => {
    if (err) {
        throw err
    }
    t3 = data.toString()
    const text_to_write = t1 + ` ` + t2 + ` ` + t3
    fs.writeFile(`text4.txt`, text_to_write, writefile)
}

function writefile(err) {
    if (err) {
        throw err
    }
    console.log(`Caricamento completato con successo!`)
}