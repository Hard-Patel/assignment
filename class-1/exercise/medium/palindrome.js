/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const skipper = [" ", ",", ".", "!", "?"];
  if (str.length <= 1) {
    return true;
  } else if (str[0].toLowerCase() == str[str.length - 1].toLowerCase()) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else if (skipper.includes(str[0]) || skipper.includes(str[str.length - 1])) {
    if (skipper.includes(str[0])) {
      return isPalindrome(str.substring(1, str.length));
    } else {
      return isPalindrome(str.substring(0, str.length - 1));
    }
  } else {
    return false;
  }
}

module.exports = isPalindrome;
