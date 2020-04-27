/***
https://twitter.com/EmmaBostian/status/1240702522777415682

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined

Ex)
abde =&gt; c
abcdefgijk =&gt; h
abcdef =&gt; undefined
***/

function find(str) {
  const strLen = str.length;

  for (let i = 1; i < strLen; i++) {
    const nextCharCode = str.charCodeAt(i - 1) + 1;

    if (nextCharCode !== str.charCodeAt(i)) {
      return String.fromCharCode(nextCharCode);
    }
  }
}

function run(str) {
  console.log(`${str} result: %s`, find(str));
}

['abde', 'abcdefgijk', 'abcdef'].forEach(s => run(s));

// Note: does not take into account lowerCase upperCase diffs
