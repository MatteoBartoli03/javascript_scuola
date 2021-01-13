'use strict' // this code works the modern way (2.3)

// (2.1 in prova.html) 
// 2.2

alert("All fine now"); // obbligatorio il punto e virgola e l'accapo (altrimenti errore)
["a", "b"].forEach(alert) // fa l'operazione alert con ogni elemento dell'array presente prima del punto

let a = 1, b = 18;
let c = a + b;

[a, b, c].forEach(alert);

const miByrthday = '11.11.1111' // can't reassign

alert(miByrthday);


let admin, name;
name = 'paul';
admin = 'luke';

[ admin, name ].forEach(alert)

name = 'john';

[ admin, name ].forEach(alert)