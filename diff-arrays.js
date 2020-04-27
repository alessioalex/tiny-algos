/**
 * https://twitter.com/EmmaBostian/status/1240641753566400514
 *
 * Compare two arrays and return a new array with any items only found
 * in one of the two given arrays, but not both.
 */

// functionally nice, yet probably slow
function diffArrays(arrayA, arrayB) {
  return [
    ...new Set(
         [...arrayA.filter(x => !arrayB.includes(x)),
         ...arrayB.filter(x => !arrayA.includes(x))]
    )
  ];
}

console.log(diffArrays([
  1, 2, 5, 7
], [
  2, 7, 9, 1, 1, 3, 3, 2
]))
// [5, 9, 3]
