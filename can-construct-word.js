"use strict";

// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) { // w + k

  if (letters.length < word.length) { // constant; single operation
    return false;
  }

  function getFrequencyCounter(str) { // constant

    const freqs = {};

    for (const char of str) { // n (length of string input)
      const currFreq = freqs[char] || 0;
      freqs[char] = currFreq + 1;
    }

    return freqs; // constant
  }

  // w + k + wordFreqs.length (which will be <= w)

  const wordFreqs = getFrequencyCounter(word); // w (bc we're looping thru)
  const letterFreqs = getFrequencyCounter(letters); // k (bc we're looping thru)

  for (const key in wordFreqs) { // length of wordFreqs, i.e. # of keys
    if (!(key in letterFreqs) || wordFreqs[key] > letterFreqs[key]) { // const
      return false;
    }
  }

  return true;
}



/*

Input(s): two strings - word and letters
Output(s): boolean

1. First check that the letters string is at least equal in length to word str
2. Initialize a frequency counter function to use on both strings
3. Call the frequency counter on both strings to catch their ltrs + frequencies
4. Check that letter frequencies in letter counter are >= those in word str
5. Return true if the loop completes



canConstructWord»
This should accept two strings: word and letters.
It should return true if the word can be built with the letters; otherwise,
it should return false.

There are only lowercase letters (with no spaces or punctuation)
in both word and letters.

Constraints: time complexity: O(w + k)
(if w is the length of word and k is the length of letters)

canConstructWord('aa', 'abc');
  // false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba');
  // true -- can build "abc" with letters "abcd"

canConstructWord('aabb', 'bcabad');
  // true -- can build "aabbcc" with those letters

*/