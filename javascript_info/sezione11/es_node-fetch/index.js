//due requests e poi gestisce e stampa una parte dei json restituitica
const fetch = require('node-fetch')

const r1 = fetch('https://jsonplaceholder.typicode.com/comments/1', {
  method : "GET",
})
  .then(response => response.json())
  .then(json => json.email)

const r2 = fetch('https://jsonplaceholder.typicode.com/comments/2', {
  method : "GET",
})
    .then(response => response.json())
    .then(json => json.email)

Promise.all([r1, r2])
.then(r => "le due email sono: " + r[0] + " e " + r[1])
.then(data => console.log(data))