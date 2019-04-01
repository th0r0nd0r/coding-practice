var lengthOfLongestSubstringKDistinct = function(s, k) {
  if ((!typeof(s) === 'string' && !s instanceof String) || s.length === 0 || k === 0) return 0;
  
  let left = 0, longest = 0, distinct = 0, max = 0;
  
//     mapping of characters to their frequency in the current substring window
  const chars = {};
  
  for (let right = 0; right < s.length; right++) {
      let char = s[right];
      
//         increment char count + add distinct if necessary
      if (!chars[char] || chars[char] === 0) {
          distinct++;
          chars[char] = 1;
      } else {
          chars[char]++;
      }
      
//         if we have to many distinct chars, move the left pointer until distinct <= k
      while (distinct > k) {
          let leftChar = s[left];
          chars[leftChar]--;
          
          if (chars[leftChar] === 0) {
              distinct--;
          }
          
          left++;
      }
      
      max = Math.max(max, right - left + 1);
  }
  
  return max;
};