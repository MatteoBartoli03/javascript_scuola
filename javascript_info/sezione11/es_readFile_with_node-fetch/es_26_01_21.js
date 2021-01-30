`use strict`
const fs = require("fs")
const util = require('util')

const read1 = util.promisify(fs.readFile)
const r1 = read1('text1.txt')
.then(data => data.toString())

const read2 = util.promisify(fs.readFile)
const r2 = read1('text2.txt')
.then(data => data.toString())

const read3 = util.promisify(fs.readFile)
const r3 = read1('text3.txt')
.then(data => data.toString())

Promise.all([r1, r2, r3])
.then(r => {
    let sum = ""
    r.forEach(element => {
        sum = sum + " " + element
    })
    console.log(sum)
})