/**
 * https://www.reddit.com/r/dailyprogrammer/comments/ffxabb/20200309_challenge_383_easy_necklace_matching/
 *
 * Challenge
 * Imagine a necklace with lettered beads that can slide along the string.
 * Here's an example image. In this example, you could take the N off NICOLE
 * and slide it around to the other end to make ICOLEN.
 * Do it again to get COLENI, and so on.
 * For the purpose of today's challenge, we'll say that the strings "nicole",
 * "icolen", and "coleni" describe the same necklace.
 *
 * Generally, two strings describe the same necklace if you can remove some
 * number of letters from the beginning of one, attach them to the end in their
 * original ordering, and get the other string. Reordering the letters in some
 * other way does not, in general, produce a string that describes the same
 * necklace.
 *
 * Write a function that returns whether two strings describe the same necklace.
 *
 * Examples
 * same_necklace("nicole", "icolen") => true
 * same_necklace("nicole", "lenico") => true
 * same_necklace("nicole", "coneli") => false
 * same_necklace("aabaaaaabaab", "aabaabaabaaa") => true
 * same_necklace("abc", "cba") => false
 * same_necklace("xxyyy", "xxxyy") => false
 * same_necklace("xyxxz", "xxyxz") => false
 * same_necklace("x", "x") => true
 * same_necklace("x", "xx") => false
 * same_necklace("x", "") => false
 * same_necklace("", "") => true
 */

function same_necklace(firstString, secondString) {
  const strLen = firstString.length;

  // some minor optimizations
  if (strLen !== secondString.length) {
    return false;
  }

  if (strLen < 2) {
    return firstString === secondString;
  }

  // the position of the first letter from the first string
  // in the second one
  let startFromIndex;

  while (true) {
    // if that's not found then it's not the same => break out
    // b) if it's found, then we try to see if we can reconstruct firstString in
    // the secondString starting from `startFromIndex`
    startFromIndex = findCharByIndex(
      secondString, strLen, firstString[0], startFromIndex || 0
    );

    // if there is no next occurence => break out
    if (startFromIndex === -1) {
      break;
    }

    let index = 0;

    while (true) {
      let secondStringIndex = startFromIndex + index;

      // if the 2nd string index reaches the end, we continue from the beginning
      if (secondStringIndex >= strLen) {
        secondStringIndex = secondStringIndex % strLen;
      }

      if (firstString[index] !== secondString[secondStringIndex]) {
        break;
      }

      index++;

      // if we already compared all letters from firstString to their
      // correspondents from secondString it means there's a necklace
      if (index === strLen) {
        return true;
      }
    }
  }

  return false;
}

function findCharByIndex(haystack, haystackLength, needle, indexToStartFrom) {
  let start = 0;

  // intended '!=' to exclude undefined && null only, not 0 for example
  if (indexToStartFrom != null) {
    start = indexToStartFrom + 1;
  }

  for (let index = start; index < haystackLength; index++) {
    if (haystack[index] === needle) {
      return index;
    }
  }

  return -1;
}

function shouldBe(fn, args, expectedResult) {
  console.log(`${fn.name}('${args.join('\', \'')}') should equal ${expectedResult}`);

  const actualResult = fn(...args);

  if (actualResult !== expectedResult) {
    console.error('INVALID RESULT');
    console.error(`${actualResult} !== ${expectedResult}`);
    process.exit(1);
  }
}

shouldBe(same_necklace, ["nicole", "icolen"], true);
shouldBe(same_necklace, ["nicole", "lenico"], true);
shouldBe(same_necklace, ["nicole", "coneli"], false);
shouldBe(same_necklace, ["aabaaaaabaab", "aabaabaabaaa"], true);
shouldBe(same_necklace, ["abc", "cba"], false);
shouldBe(same_necklace, ["xxyyy", "xxxyy"], false);
shouldBe(same_necklace, ["xyxxz", "xxyxz"], false);
shouldBe(same_necklace, ["x", "x"], true);
shouldBe(same_necklace, ["x", "xx"], false);
shouldBe(same_necklace, ["x", ""], false);
shouldBe(same_necklace, ["", ""], true);
// another example added by me
shouldBe(same_necklace, ["ab", "ba"], true);

console.log();
console.log('/////////////////////////////////////////////////////////////////');
console.log();

///////////////////////////////////////////////////////////////////////////////
// Optional Bonus 1
//
// If you have a string of N letters and you move each letter one at a time from
// the start to the end, you'll eventually get back to the string you started
// with, after N steps. Sometimes, you'll see the same string you started with
// before N steps. For instance, if you start with "abcabcabc", you'll see the
// same string ("abcabcabc") 3 times over the course of moving a letter 9 times.
//
// Write a function that returns the number of times you encounter the same
// starting string if you move each letter in the string from the start to the
// end, one at a time.
//
// repeats("abc") => 1
// repeats("abcabcabc") => 3
// repeats("abcabcabcx") => 1
// repeats("aaaaaa") => 6
// repeats("a") => 1
// repeats("") => 1

function repeats(str) {
  if (!str) { return 1; }

  const original = Array.from(str);
  const length = original.length;
  const clone = original.slice(0);
  const lastItemIndex = length - 1;
  let repeats = 0;

  // number of moves until we reach the original positions of the letters again
  for (let i = 0; i < length; i++) {
    const firstValue = clone[0];

    for (let j = 0; j < lastItemIndex; j++) {
      clone[j] = clone[j + 1];
    }

    clone[lastItemIndex] = firstValue;

    if (isIdenticalArray(original, clone)) {
      repeats++;
    }
  }

  return repeats;
}

function isIdenticalArray(arrayA, arrayB) {
  return !(arrayA.find((item, index) => item !== arrayB[index]));
}

shouldBe(repeats, ["abc"], 1);
shouldBe(repeats, ["abcabcabc"], 3);
shouldBe(repeats, ["abcabcabcx"], 1);
shouldBe(repeats, ["aaaaaa"], 6);
shouldBe(repeats, ["a"], 1);
shouldBe(repeats, [""], 1);


