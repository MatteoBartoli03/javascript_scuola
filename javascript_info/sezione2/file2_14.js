`use strict`

//2.14
/*
//SWITCH
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' ); // questo viene stampato
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
// se non ci fossero i break , stamperebbe tutto dal suo caso in avanti, quindi in questo caso stamperebbe case 4, case 5 e default

a = 3;
switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

// come argomento dello switch ci può essere una variabile trasformata in intero
let a = "1";
let b = 0;
switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;
  default:
    alert("this doesn't run");
}

// o anche direttamente una stringa, però poi i casi saranno stringhe
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;
  case '2':
    alert( 'Two' );
    break;
  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
*/

//FINAL TASKS

//1. Rewrite the "switch" into an "if"
let browser = 'Safari'
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" )
    break
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' )
    break
  default:
    alert( 'We hope that this page looks ok!' )
}

if (browser == 'Edge') {
    alert( "You've got the Edge!" )
} else if (browser == 'Chrome'|| 'Firefox' || 'Safari' || 'Opera') {
    alert( 'Okay we support these browsers too' )
} else if (browser == 'Opera') {
    alert( 'We hope that this page looks ok!' )
}

//2. Rewrite the "if" into an "switch"
let b = +prompt('b?', '');
if (b == 0) {
  alert( 0 );
}
if (b == 1) {
  alert( 1 );
}
if (b == 2 || b == 3) {
  alert( '2,3' );
}

switch(b) {
    case 0:
    case 1:
        alert(`${b}`)
        break
    case 2:
    case 3:
        alert(`2,3`)
        break
}