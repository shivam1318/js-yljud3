// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/*
alert(undefined && 2 && null);
alert(alert(1) && alert(3));

const password = '@yogika1318';
let name = prompt('Enter your name-');
if (name === 'admin') {
  let inputPassword = prompt('Enter your password please!!');
  if (inputPassword === '' || inputPassword === 'null') {
    alert('cancelled');
  } else if (inputPassword != password) {
    alert(`Sorry ${name} I don’t know you`);
    alert('wrong password');
  } else if (inputPassword == password) {
    alert(`Welcome ${name}!!!!`);
  }
} else if (name == '' || name == null) {
  alert('cancelled');
}
let b = 1,
  a;
alert(a ?? b);

let userName = 'shivam';
function showMessage() {
  let userName = 'yogi';
  alert(`hii ${userName}`);
}

showMessage();

function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}
checkAge(19);

function findMin(a, b) {
  return a > b ? alert(b) : alert(a);
}
findMin(12.5, -12.58);
*/

function calcPower(x, n) {
  return x ** n;
}

let result = calcPower(2, 4);
alert(result);
