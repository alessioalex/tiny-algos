/**
 * https://www.reddit.com/r/dailyprogrammer/comments/aphavc/20190211_challenge_375_easy_print_a_new_number_by/
 *
 * Description
 *
 * A number is input in computer then a new no should get printed by adding one
 * to each of its digit. If you encounter a 9, insert a 10
 * (don't carry over, just shift things around).
 *
 * For example, 998 becomes 10109.
 *
 * Bonus
 * This challenge is trivial to do if you map it to a string to iterate over
 * the input, operate, and then cast it back. Instead, try doing it without
 * casting it as a string at any point, keep it numeric
 * (int, float if you need it) only.
 */

// 7949 === 810510 === (9 + 1) * Math.pow(10, 0)
//                   + (4 + 1) * Math.pow(10, 2)
//                   + (9 + 1) * Math.pow(10, 3)
//                   + (7 + 1) * Math.pow(10, 5)
//
// so the power of 10 increases by 2 every time we encounter a 9 digit

function addOneToDigits(num, pow = 0) {
  // stop condition
  if (num < 10) {
    return (num + 1) * Math.pow(10, pow);
  }

  const newNum = Math.trunc(num / 10);
  const rest = num % 10;
  // as seen in our deconstruction example above, power increases by 2
  // when there's a 9
  const powIncrease = rest === 9 ? 2 : 1;

  return addOneToDigits(newNum, pow + powIncrease) + (rest + 1) * Math.pow(10, pow);
}

console.log('addOneToDigits(998) ===', addOneToDigits(998));
console.log('addOneToDigits(7949) ===', addOneToDigits(7949));
