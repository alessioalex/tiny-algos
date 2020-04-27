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
  // str.split('') not ideal for emojies, see https://twitter.com/addaleax/status/1243886629422587905
  return str.split('').reverse().join('');
}

['JavaScript', 'ʕ•́ᴥ•̀ʔっ♡'].forEach(str => {
  console.log(reverseString(str));
  console.log(cheesingIt(str));
});
