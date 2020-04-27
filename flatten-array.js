/***
 * https://twitter.com/EmmaBostian/status/1243888538288087041
 *
 * How would you flatten an array without the array.flat() method?
 */

function flattenArray(initialArray) {
  const temporaryArray = [];

  function flatten(ary, tmp) {
    if (!Array.isArray(ary)) { tmp.push(ary); }

    for (let i = 0, len = ary.length; i < len; i++) {
      flatten(ary[i], tmp);
    }
  }

  flatten(initialArray, temporaryArray);

  return temporaryArray;
}

console.log(flattenArray([1, 2, [3, 4], [5, 6, [7]]]));
// should be [1, 2, 3, 4, 5, 6, 7]
