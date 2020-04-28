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

function shouldBe(args, result) {
  console.log(`same_necklace('${args.join('\', \'')}') should equal ${result}`);

  if (same_necklace(...args) !== result) {
    throw new Error(`invalid result`);
  }
}

shouldBe(["nicole", "icolen"], true);
shouldBe(["nicole", "lenico"], true);
shouldBe(["nicole", "coneli"], false);
shouldBe(["aabaaaaabaab", "aabaabaabaaa"], true);
shouldBe(["abc", "cba"], false);
shouldBe(["xxyyy", "xxxyy"], false);
shouldBe(["xyxxz", "xxyxz"], false);
shouldBe(["x", "x"], true);
shouldBe(["x", "xx"], false);
shouldBe(["x", ""], false);
shouldBe(["", ""], true);
// another example added by me
shouldBe(["ab", "ba"], true);
