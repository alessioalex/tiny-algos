/**
 * https://twitter.com/EmmaBostian/status/1243883400911630336
 *
 * Reversing a string in JavaScript
 */

function reverseString(str) {
  let index = str.length - 1;
  let newString = '';

  while (index !== -1) {
    newString += str.charAt(index);
    index--;
  }

  return newString;
}

function cheesingIt(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('JavaScript'));
console.log(cheesingIt('JavaScript'));
