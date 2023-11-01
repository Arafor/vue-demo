function getLongestSubstring(example) {
  let allSubstrings = [];
  let usedCharacters = [];
  let substring = '';

  [...example].forEach((character) => {
    // Previously used character found
    if (usedCharacters.includes(character)) {
      // Store substring
      allSubstrings.push(substring);

      // Reset for next substring
      usedCharacters = [];
      substring = '';
    }

    // Continue discovering substring
    usedCharacters.push(character);
    substring = `${substring}${character}`;
  });

  // Store last substring
  allSubstrings.push(substring);

  // Find which of the substrings has the longest length
  const longestSubstring = allSubstrings.reduce(
    (longestLengthFound, substring) => substring.length > longestLengthFound
      ? substring.length
      : longestLengthFound
    , 0
  );

  console.log(longestSubstring);
}

getLongestSubstring('abcabcbb'); //expected abc 3
getLongestSubstring('bbbbb'); // b 1
getLongestSubstring('pwwkew'); // wke 3
getLongestSubstring('abcdabccd'); // abcd 4
