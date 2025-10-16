function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  // Start with the first string as the prefix
  let prefix = strs[0];
  // Compare prefix with each string
  for (let i = 1; i < strs.length; i++) {

    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten prefix until it matches
      prefix = prefix.slice(0, -1);
          console.log(prefix);

      if (!prefix) return "";
    }
  }

  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
