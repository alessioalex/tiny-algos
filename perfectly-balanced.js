/**
 * https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/
 *
 * Given a string containing only lowercase letters,
 * find whether every letter that appears in the string appears the same number
 * of times. Don't forget to handle the empty string ("") correctly!
 *
 * balanced_bonus("xxxyyyzzz") => true
 * balanced_bonus("abccbaabccba") => true
 * balanced_bonus("xxxyyyzzzz") => false
 * balanced_bonus("abcdefghijklmnopqrstuvwxyz") => true
 * balanced_bonus("pqq") => false
 * balanced_bonus("fdedfdeffeddefeeeefddf") => false
 * balanced_bonus("www") => true
 * balanced_bonus("x") => true
 * balanced_bonus("") => true
 *
 * Note that balanced_bonus behaves differently than balanced for a few inputs, e.g. "x".
 */

function balanced_bonus(str) {
  const length = str.length;

  if (length < 2) { return true; }

  const appearances = new Map();
  let index = 0;

  while (index < length) {
    const key = str.charCodeAt(index);
    let appearancesSoFar = appearances.get(key) || 0;
    appearances.set(key, ++appearancesSoFar);
    index++;
  }

  const entries = Array.from(appearances.entries());
  const firstCharAppearances = entries[0][1];

  const isUnbalanced = entries.find(keyValPair => keyValPair[1] !== firstCharAppearances);

  return !isUnbalanced;
}

console.log(balanced_bonus('') === true);
console.log(balanced_bonus('x') === true);
console.log(balanced_bonus('abba') === true);
console.log(balanced_bonus('abbac') === false);
console.log(balanced_bonus("xxxyyyzzz") === true);
console.log(balanced_bonus("abccbaabccba") === true);
console.log(balanced_bonus("xxxyyyzzzz") === false);
console.log(balanced_bonus("abcdefghijklmnopqrstuvwxyz") === true)
console.log(balanced_bonus("pqq") === false);
console.log(balanced_bonus("fdedfdeffeddefeeeefddf") === false);
console.log(balanced_bonus("www") === true);
console.log(balanced_bonus("x") === true)
console.log(balanced_bonus("") === true)
